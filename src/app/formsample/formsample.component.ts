import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

export class Phone {
  constructor(public title: string, public price: number, public company: string) {}
}

@Component({
  selector: 'app-formsample',
  templateUrl: './formsample.component.html',
  styleUrls: ['./formsample.component.css']
})

export class FormsampleComponent implements OnInit {

 
  phone: Phone = new Phone("", 0, "");

  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola","Alcatel"];

  constructor() { }

  ngOnInit(): void {
  }

  addPhone(title: NgModel, price: NgModel, comp: NgModel) {
    //this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    console.log(title);
  }

}
