import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';

  ratings: number[] = [3.4, 5, 1.5, 2.2];

  public onStarClicked(rating: number) {
    console.log(`The rating ${rating} is clicked`);
  }
}
