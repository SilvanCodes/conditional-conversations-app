import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
import {
  ConversationParticipantsFragment,
  GetConversationMessagesGQL,
  SendMessageFragment,
  SendNewMessageGQL,
} from '../generated/gql';

@Component({
  selector: 'ccs-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnDestroy {
  public conversation$: ReplaySubject<ConversationParticipantsFragment> = new ReplaySubject(
    1
  );

  public sendMessage$: Subject<void> = new Subject();

  public sendMessageFormControl: FormControl;

  private cleanup: Subscription;

  @Input()
  public set conversation(value: ConversationParticipantsFragment | null) {
    if (value) {
      this.conversation$.next(value);
    }
  }

  public messages$: Observable<Array<SendMessageFragment>>;

  constructor(
    private getConversationMessages: GetConversationMessagesGQL,
    private sendMessage: SendNewMessageGQL,
    private userService: UserService
  ) {
    this.sendMessageFormControl = new FormControl('', {
      validators: Validators.required,
    });

    this.messages$ = this.conversation$.pipe(
      switchMap(
        ({ id }) =>
          this.getConversationMessages.watch({ id }, { pollInterval: 500 })
            .valueChanges
      ),
      map((result) => {
        if (
          result.data.getConversation &&
          result.data.getConversation.messages
        ) {
          return result.data.getConversation.messages;
        } else {
          return [];
        }
      })
    );

    this.cleanup = this.sendMessage$
      .pipe(
        filter((_) => this.sendMessageFormControl.valid),
        map((_) => this.sendMessageFormControl.value),
        withLatestFrom(this.conversation$, this.userService.user$),
        switchMap(([text, conversation, user]) =>
          this.sendMessage.mutate({
            message: {
              sender: {
                id: user.id,
              },
              conversation: {
                id: conversation.id,
              },
              text,
            },
          })
        ),
        tap((_) => this.sendMessageFormControl.reset(''))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.cleanup.unsubscribe();
  }
}
