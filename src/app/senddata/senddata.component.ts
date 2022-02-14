import { Component, OnInit } from '@angular/core';
import { HttpsendService } from '../httpsend.service';

@Component({
  selector: 'app-senddata',
  templateUrl: './senddata.component.html',
  styleUrls: ['./senddata.component.css'],
  providers: [HttpsendService]
})
export class SenddataComponent  {

  num1: number = 0;
  num2: number = 0;
  sum: number | undefined;
  done: boolean = false;
  constructor(private httpService: HttpsendService) { }
  submit() {
     
    this.httpService.getSum(this.num1, this.num2).subscribe((data: any) => {
      this.sum = data.result;
      this.done = true;
    });
  }
}
