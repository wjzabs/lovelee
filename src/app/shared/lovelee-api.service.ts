import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoveleeApi {
   private baseUrl = 'https://lovelee-a4da8.firebaseio.com/';
  // database = firebase.database();
   myName = "walter";
  allWines = []; 
  allGrades = []; 
  currentWine: any = {};
  currentCategory: any = {};
  currentCategoryWines: any[];
 //  favorites = [];

  constructor(private http: Http) { }
   
  getCategories() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/categories.json`)
      .subscribe(res => resolve(res.json()));
    });
  }
   
  getCategoryData(category) : Observable<any> {
    return this.http.get(`${this.baseUrl}/wines.json`)
      .map((response:Response) => {
       // let allWines = [];
        this.currentCategory = category;
        this.allWines = response.json();
        return this.allWines; // this.currentCategoryWines;
      })
     .map(wine => wine.filter(wine => wine.category === category.id));
     // how to assign currentCategoryWines to the filtered list?
  }  

  getAllWines() {
  //  return this.allWines;
    return this.http.get(`${this.baseUrl}/wines.json`)
      .map((response:Response) => {
       // let allWines = [];
        this.allWines = response.json();
        return this.allWines;  
      })
  }

  getCurrentCategoryWines() {
    return this.currentCategoryWines;
  }

  getAllGrades() : Observable<any> {
    return this.http.get(`${this.baseUrl}/grades.json`)
      .map((response:Response) => {
        this.allGrades = response.json();
        return this.allGrades;  
      })
  }   

  getWineGrades(wine) : Observable<any> {
    return this.http.get(`${this.baseUrl}/grades.json`)
      .map((response:Response) => {
        this.currentWine = wine;
        this.allGrades = response.json();
        return this.allGrades;  
      })
     .map(grade => grade.filter(grade => grade.wineId === wine.id));
     // how to assign currentCategoryWines to the filtered list?
  }    
}