import { ElementRef, ViewChild, ContentChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  name: string = "";
  counter: number = 0;

  @ViewChild("username", { static: false }) nameParagraph: ElementRef | undefined;
  @ContentChild("headercontent", { static: false }) header: ElementRef | undefined;

  change() {
    if (this.nameParagraph !== undefined) {
      console.log(this.nameParagraph.nativeElement.textContent);
      this.nameParagraph.nativeElement.textContent = "Hello";
    }

    if (this.header !== undefined) {
      this.header.nativeElement.textContent = "Header Changed !";
    }
  }

  increament() { this.counter++; }
  decreament() { this.counter--; }

  constructor() { }

  ngOnInit(): void {
  }

}
