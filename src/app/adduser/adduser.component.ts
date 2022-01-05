import { Component, OnInit } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users: user[] = [{ email: 'a@a.com', address: 'esf 123', password: '123' },
  { email: 'b@b.com', address: 'esf 456', password: '345' },
  { email: 'v@v.com', address: 'esf 678', password: '678' }];

  constructor() { }

  ngOnInit(): void {
  }

  public onAddUser(eml: string, pswrd: string, adrss: string, e: Event) {
    e.preventDefault();
    let u: user = { email: eml, password: pswrd, address: adrss };
    this.users.push(u);
  }
}
