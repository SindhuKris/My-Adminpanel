import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSer = 'https://cat-fact.herokuapp.com/facts'

  constructor(public http: HttpClient) { }

  

  getTrendingMovies(){
    return this.http.get<any>(`${this.authSer}/movies`,{})
  }  

}
