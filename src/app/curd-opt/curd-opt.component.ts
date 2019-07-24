import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//import {toPromise} from 'rxjs/operators';
//import {Observable} from 'rxjs';
//import { HttpClient, Response, Headers} from '@angular/common/http';


@Component({
  selector: 'app-curd-opt',
  templateUrl: './curd-opt.component.html',
  styleUrls: ['./curd-opt.component.css']
})
export class CurdOptComponent implements OnInit {

  constructor( private http: Http) { }
  products = [];
  //httpdata: any;
  //productsUrl = "./products.json";
  // id: number;
  // private headers = new Headers({'content-Type': 'application/json'});

  fetchdata = function() {
    this.http.get("http://localhost:5555/Products")
    .subscribe(
      (res: Response) => { this.products = res.json(); }
    )
  }
  /* 
  deleteProduct = function(id: any){
    if(confirm("Are you sure?")){
      const url = '${"http://localhost:5555/Products"}/${id}';
      return ( this.http.delete(url, {headers: this.headers}).toPromise()
      .then(()=>{
        this.fetchdata();
      }))
    }
  }*/

  ngOnInit() {
    this.fetchdata();
  }
}