import { Component, OnInit } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  users: user[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
