import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
  constructor(@Optional() private logService: LogService) { }

  private data: string[] = ["Apple", "Samsung", "Nokia"];

  getData(): string[] {
    if (this.logService) this.logService.write("get Data");
    return this.data;
  }

  addData(name: string) {
    this.data.push(name);
    if (this.logService) this.logService.write("add data : " + name);
  }

}
