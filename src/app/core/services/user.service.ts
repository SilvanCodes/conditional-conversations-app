import { Injectable } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { AddUserGQL, DeleteUserGQL } from 'src/app/generated/gql';

import { unpackMutation } from 'src/app/utility';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user$ = this.addUser.mutate({ nickname: '' + +new Date() }).pipe(
    unpackMutation('addUser'),
    map((userPayload) => {
      if (userPayload?.user && userPayload.user[0]) {
        return userPayload.user[0];
      } else {
        throw Error('no user present');
      }
    }),
    shareReplay(1)
  );

  constructor(private addUser: AddUserGQL, private deleteUser: DeleteUserGQL) {}

  public removeUser(): Promise<any> {
    return this.user$
      .pipe(switchMap(({ id }) => this.deleteUser.mutate({ id })))
      .toPromise();
  }
}
