import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'data-comp',
  template: `<div>
    <input [(ngModel)]="newItem"  />
    <button (click)="addItem(newItem)" > Add </button>
  </div>
 <table>
      <tr *ngFor="let item of items">
          <td>{{item}}</td>
      </tr>
  </table>
  `

})

export class DataComponent {
  newItem: string = "";
  items: string[] = [];

  constructor(private dataService: DataService) { }

  addItem(name: string) {
    this.dataService.addData(name);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}

