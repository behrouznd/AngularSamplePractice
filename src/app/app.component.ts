import { Component, ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'FirstApp';

  ratings: number[] = [3.4, 5, 1.5, 2.2];
  condition: boolean = false;

  public onStarClicked(rating: number) {
    console.log(`The rating ${rating} is clicked`);
    
  }

  @ViewChild(Child1Component, { static: false }) private counterComponent: Child1Component | undefined;

  increamentMain() {
    console.log(this.counterComponent?.counter);
    this.counterComponent?.increament();
  }

  decreamentMain() {
    console.log(this.counterComponent?.counter);

    this.counterComponent?.decreament();
  }

  toggle() {
    this.condition = !this.condition;
  }

  constructor(private dataService: DataService) {}

  items: string[] = [];
  name: string = "";
  addItem(name: string) {
    this.dataService.addData(name);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
