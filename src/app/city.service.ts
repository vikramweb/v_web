import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  
  getCities() {
    let cities =[
    { name :"New York" },
    { name: "California" },
    { name: "New Jersey" },
    { name: "Texas" }
    ];
    return cities;
  }

  constructor() { }
}
