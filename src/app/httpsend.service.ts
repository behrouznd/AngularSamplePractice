import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpsendService {
  constructor(private http: HttpClient) { }

  getSum(num1: number, num2: number) {
    //return this.http.get('http://localhost:3000/sum?num1=1&num2=3');
    const params = new HttpParams()
      .set('num1', num1.toString())
      .set('num2', num2.toString());
    return this.http.get('http://localhost:3000/sum', { params });
  }
}
