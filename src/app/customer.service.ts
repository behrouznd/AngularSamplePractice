import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  private url = "http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }


}
