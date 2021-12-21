import { Component } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
//  styles: [`
//p{color:red}
//`]
//  template: `
//<p>Template : <\p>
//`
})

export class UserComponent {
  name: string = "Behrouz";
  isEnabled: boolean = false;

  public onInputChanged(e: Event) {
    console.log(e);

    this.name = (<HTMLInputElement>e.target).value;
  }
}
