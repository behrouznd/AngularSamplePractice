import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './user';

@Injectable()
export class HttppostService {
  constructor(private http: HttpClient) { }

  postData(userobj: user) {
    const body = { name: userobj.name, age: userobj.age };
    return this.http.post('http://localhost:3000/postuser', body);

  }
}
