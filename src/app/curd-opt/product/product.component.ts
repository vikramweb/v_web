import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private http:Http) { }
  productObj: object = {};
  confirmationString: string = "New Person is added";
  isAdded: boolean = false;

  addNewProduct = function (product: { name: any; email: any; }){
    this.productObj = {
      "name": product.name,
      "email": product.email
    }
    this.http.post("http://localhost:5555/Products/", this.productObj)
    .subscribe((res:Response) => { this.isAdded = true })
  }
  ngOnInit() {
  }

}