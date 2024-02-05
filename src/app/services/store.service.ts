import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends SessionService{

  constructor( ) { 
    super();
  }

  private_user: any;

  get user(): string{
    return this.getValueFromLocalStore('user');
  }

  set user(value:string){
    this.setValueToLocalStore('user', value);
  }
}



