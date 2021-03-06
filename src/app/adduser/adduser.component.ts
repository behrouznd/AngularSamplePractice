import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
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

  @Output() onAddUserClicked = new EventEmitter<user[]>();

  constructor() { }

  ngOnInit(): void {
    this.onAddUserClicked.emit(this.users);
  }

  public onAddUser(eml: string, pswrd: string, adrss: string, e: Event) {
    e.preventDefault();
    let u: user = { email: eml, password: pswrd, address: adrss };
    this.users.push(u);
    console.log(eml);
    this.onAddUserClicked.emit(this.users);
  }
}
