import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sample1Component } from './Practice01/sample1.component';
import { Practice2Component } from './Practice02/practice2.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    Sample1Component,
    Practice2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
