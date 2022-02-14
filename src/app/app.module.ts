import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Sample1Component } from './Practice01/sample1.component';
import { Practice2Component } from './Practice02/practice2.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { StarComponent } from './star/star.component';
import { DecouplingComponent } from './decoupling/decoupling.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsertableComponent } from './usertable/usertable.component';
import { Child1Component } from './child1/child1.component'
import { BoldDirection } from './bold.directive';
import { WhileDirective } from './while.directive';
import { DataComponent } from './data.component';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { FormsampleComponent } from './formsample/formsample.component';
import { FormsreactiveComponent } from './formsreactive/formsreactive.component';
import { UserserviceComponent } from './userservice/userservice.component';
import { SenddataComponent } from './senddata/senddata.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    Sample1Component,
    Practice2Component,
    StarComponent,
    DecouplingComponent,
    AdduserComponent,
    UsertableComponent,
    Child1Component,
    BoldDirection,
    WhileDirective,
    DataComponent,
    FormsampleComponent,
    FormsreactiveComponent,
    UserserviceComponent,
    SenddataComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
