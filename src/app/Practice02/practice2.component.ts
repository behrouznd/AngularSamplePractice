import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})


export class Practice2Component implements OnInit {
  isCorrect: boolean = false;
  isModified: boolean = true;
  isCancelled: boolean = true;
  switchProperty: string = "c";

  styles = {};
  classes = {};
  users: string[] = [ 'Behrouz', 'Behzad', 'Bijan', 'Bahram'];

  userObj: any = [
    { id: 1, name: 'Behrouz' },
    { id: 2, name: 'Behzad' },
    { id: 3, name: 'Bahham' }
  ];

  ngOnInit(): void {
    this.styles = {
      'font-size': this.isCorrect ? '2rem' : '8rem',
      'color': 'red'
    };

    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    };

  }

  public addNewUser() {
    this.userObj = [
      { id: 1, name: 'Behrouz' },
      { id: 2, name: 'Behzad' },
      { id: 3, name: 'Bahham' },
      { id: 4, name: 'Benyamin' }

    ];

  }

  public trackByFunc(index: number, el: any) {
    return el.id;
  }
}
