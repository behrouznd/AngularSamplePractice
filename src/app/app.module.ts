import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sample1Component } from './Practice01/sample1.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    Sample1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
