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
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
/* 
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
  
  deleteProduct = function(id: any){
    if(confirm("Are you sure?")){
      const url = '${"http://localhost:5555/Products"}/${id}';
      return ( this.http.delete(url, {headers: this.headers}).toPromise()
      .then(()=>{
        this.fetchdata();
      }))
    }
  }

  ngOnInit() {
    this.fetchdata();
  }
} 

@Component({
  selector: 'app-curd-opt',
  templateUrl: './curd-opt.component.html',
  styleUrls: ['./curd-opt.component.css']
})
export class AppComponent {
*/
  title = 'Angular  CRUD operation with an Array';
  employees = [
    {name:"Sikandar", position:"Programmer"},
    {name:"Alex", position:"Designer"},
    {name:"Maria", position:"Manager"}
  ];
  model:any={};
  model2:any={};
  msg:any="";

  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added."; 
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is successfully deleted.";
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;
  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated.";
      }
    }
  }
  clickMe(){
    this.msg = "";
  }
}
