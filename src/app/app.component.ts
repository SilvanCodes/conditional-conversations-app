import { Component, HostListener, OnDestroy } from '@angular/core';
import {
  ConversationParticipantsFragment,
  GetExistingConversationsGQL,
  GetExistingConversationsQuery,
  GetExistingConversationsQueryVariables,
  RequestNewConversationGQL,
} from './generated/gql';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import {
  filter,
  map,
  pluck,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { QueryRef } from 'apollo-angular';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ccs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  public appId = (+new Date()).toString();

  public requestConversation$: Subject<never> = new Subject();
  public requestConversationFormControl: FormControl;

  public existingConversationsQueryRef:
    | QueryRef<
        GetExistingConversationsQuery,
        GetExistingConversationsQueryVariables
      >
    | undefined;

  public conversations$:
    | Observable<Array<ConversationParticipantsFragment>>
    | undefined;

  public selectedConversation$: Subject<ConversationParticipantsFragment> = new Subject();

  private cleanup: Subscription;

  public inviteLink: string | undefined;

  constructor(
    private requestConversation: RequestNewConversationGQL,
    private existingConversations: GetExistingConversationsGQL,
    private route: ActivatedRoute,
    public userService: UserService
  ) {
    this.requestConversationFormControl = new FormControl('', {
      validators: Validators.required,
    });

    this.conversations$ = this.userService.user$.pipe(
      tap((user) => {
        this.inviteLink = `${
          window.location.host
        }/?recipient=${encodeURIComponent(`${user.nickname}#${user.id}`)}`;
      }),
      switchMap(
        ({ id }) =>
          this.existingConversations.watch({ id }, { pollInterval: 1000 })
            .valueChanges
      ),
      map((result) => {
        if (
          result.data.getUser &&
          result.data.getUser.initiatedConversations &&
          result.data.getUser.receivedConversations
        ) {
          return [
            ...result.data.getUser.initiatedConversations,
            ...result.data.getUser.receivedConversations,
          ];
        } else {
          return [];
        }
      })
    );

    const setupConversationRequest$ = this.userService.user$.pipe(
      switchMap((initiator) =>
        merge(
          this.route.queryParams.pipe(
            pluck('recipient'),
            filter((value) => !!value),
            map(decodeURIComponent)
          ),
          this.requestConversation$.pipe(
            filter((_) => this.requestConversationFormControl.valid),
            map<never, string>((_) => this.requestConversationFormControl.value)
          )
        ).pipe(
          switchMap((recipient) => {
            const [nickname, id] = recipient.split('#');

            return this.requestConversation.mutate({
              initiator: { nickname: initiator.nickname, id: initiator.id },
              recipient: { nickname, id },
            });
          }),
          tap((_) => this.requestConversationFormControl.reset(''))
        )
      )
    );

    this.cleanup = merge(setupConversationRequest$).subscribe();
  }

  @HostListener('window:beforeunload')
  async ngOnDestroy(): Promise<void> {
    window.alert('onDestroy of app component');

    await this.userService.removeUser();

    this.cleanup.unsubscribe();
  }
}
