import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  data:object = {};
  products = [];
  productObj: object = {};
  private headers = new Headers({'content-Type': 'application/json'});

  constructor(private route:ActivatedRoute, private router:Router, private http: Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/Products")
    .subscribe(
      (res: Response) => { 
        this.products = res.json(); 
        for (let i = 0; i < this.products.length; i++) {
          if (parseInt(this.products[i].id)===this.id) {
            this.data = this.products[i];
            break;
          }
        }
      }
    )
    
  }

}
