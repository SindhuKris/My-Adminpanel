import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { SessionService } from './session.service';
import { StoreService } from './store.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    UserService,
    SessionService,
    StoreService
  ]
})
export class ServiceModule { }





