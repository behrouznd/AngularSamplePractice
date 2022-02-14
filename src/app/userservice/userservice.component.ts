////import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { user } from '../user';


@Component({
  selector: 'app-userservice',
  templateUrl: './userservice.component.html',
  styleUrls: ['./userservice.component.css'],
  providers: [HttpService]
})
export class UserserviceComponent implements OnInit {
 

  users: user[] = [];
  error: any;
  constructor(public httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getUsers().subscribe((data: user[]) => this.users = data);
  }

}
