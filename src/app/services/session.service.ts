import { Injectable } from '@angular/core';

declare const sessionStorage: Storage;

@Injectable({
  providedIn: 'root'
})


export class SessionService {
  private_token!: string;

  get token(): string {
    return sessionStorage.getItem('token') as string;
  }

  set token(token: string | boolean){
    if (token){
      sessionStorage.setItem('token', token as string);
    } else {
      sessionStorage.clear();
    }
  }

  constructor() { }

  setValueToLocalStore(key: string, value: string){
    if (value){
      localStorage.setItem(key,value);
    } else {
      localStorage.removeItem(key);
    }
  }

  getValueFromLocalStore(key: string){
    try{
      const value = localStorage.getItem(key) as string;
      return JSON.parse(value);
    } catch (e) {
      return localStorage.getItem(key);
    }
  }

}
