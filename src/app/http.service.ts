import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { user } from './user';
 
@Injectable()
export class HttpService {
  errorMessage: String = "";

  constructor(private http: HttpClient) { }

   

  getUsers(): Observable<user[]> {
    return this.http.get('../assets/users.json').pipe(map((data: any) => {
      let usersList = data["userList"];
      return usersList.map(function (user1: any): user {
        return new user(user1.userName, user1.userAge);
      });
    }),
      catchError(err => {
        console.log("Error:");

        console.log(err);
        this.errorMessage = err.message;
        return [];
      })

    );
  }

}
