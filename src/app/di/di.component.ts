import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})

export class DiComponent implements OnInit {
    HEROES = [
        {'id': '1', 'name': 'Vikram'},
        {'id': '2', 'name': 'Vineesha'},
        {'id': '3',  'name': 'Durgesh'},
        {'id': '4', 'name': 'Rahul'}
    ]
    heroes = this.HEROES;
    
    public taxName: number;
    public cities: { name: string; }[];
    public authors: { name: string; }[];
    public heroins: { name: string; id: number }[];

    constructor(public _mySer: MyserviceService ) {
    this.taxName = _mySer.getTaxes();
    this.heroins = _mySer.getHeroins();
    this.authors = _mySer.getAuthors();
    this.cities = _mySer.getCityList();
    }
  
  ngOnInit() {
  }
} 
