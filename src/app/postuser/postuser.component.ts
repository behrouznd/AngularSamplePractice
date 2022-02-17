import { Component, OnInit } from '@angular/core';
import { HttppostService } from '../httppost.service';
import { user } from '../user';

@Component({
  selector: 'app-postuser',
  templateUrl: './postuser.component.html',
  styleUrls: ['./postuser.component.css'],
  providers: [HttppostService]
})
export class PostuserComponent implements OnInit {
  userobj: user = new user("", 0); // данные вводимого пользователя

  recivedUser: user = new user("", 0); // полученный пользователь
  done: boolean = false;

  constructor(private httpService: HttppostService) { }

  ngOnInit(): void {
  }

  submit(user0: user) {
    this.httpService.postData(user0).subscribe(
      (data: any) => { this.recivedUser = data; this.done = true; }, error => console.log(error)
    );
  }
}
