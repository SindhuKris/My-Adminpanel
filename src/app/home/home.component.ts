import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Facts} from './home.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{ 

  facts: Facts[] =[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies(){
    this.http.get<Facts[]>('https://cat-fact.herokuapp.com/facts')
    .subscribe((facts) =>{
      this.facts = facts;
    })
  }


}
