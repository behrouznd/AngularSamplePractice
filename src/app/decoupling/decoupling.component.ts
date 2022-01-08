import { Component, OnInit } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-decoupling',
  templateUrl: './decoupling.component.html',
  styleUrls: ['./decoupling.component.css']
})
export class DecouplingComponent implements OnInit {
  users: user[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  public userAdded(users: user[]) {
    this.users = users;
  }
}
