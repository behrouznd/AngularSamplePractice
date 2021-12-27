import { Component } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html'
})

export class Sample1Component {
  userName: string = '';
  password: string = '';
  retypePassword: string = '';
  isMatchPassword: boolean = false;

  public onUserNameChanged(e: Event) {
    this.userName = (<HTMLInputElement>e.target).value;
  }

  public onPasswordInputChanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  public onRetypePasswordInputChanged(e: Event) {
    this.retypePassword = (<HTMLInputElement>e.target).value;
    this.isMatchPassword = this.password !== this.retypePassword ? false : true;
  }
}
