import { Component, Input, OnInit } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  @Input() usersTable: user[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
