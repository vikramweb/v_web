import { Injectable } from '@angular/core';
import { CityService } from './city.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  public taxValue: number;
  templateUrl = "./assets/Data/users.json";
  

  constructor(private _city: CityService, private http: HttpClient) { }

    showTodayDate() {
    let ndate = new Date();
    return ndate;
    }
    
    getAuthors() {
      let Authors =[
        {name: "Rocky"},
        {name: "Robin"},
        {name: "John"},
        {name: "Jessy"}
      ];
      return Authors;
    }
    getCityList() {
      let cities = this._city.getCities();
      return cities;
    }

    getHeroins() {
      let Heroins =[
        {'id': 1, name: "Reshma"},
        {'id': 2, name: "Rosy"},
        {'id': 3, name: "Rashi"},
        {'id': 4, name: "Reena"}
      ];
      return Heroins;
    }

    getTaxes() {
     //let taxValue: number;
     this.taxValue = Math.round(Math.random()*100);
    return this.taxValue;
    }

    getCompanyNames(): Observable<any[]>{
    return this.http.get<any[]>(this.templateUrl)
                    .catch(this.errorHandler);
    }
    errorHandler( error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }
}
