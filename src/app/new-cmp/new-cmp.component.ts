import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  name = "Pipe name";
  person = {
    "firstName": "Zeeshan",
    "lastName": "Shaik"
  }
  public date = new Date();
  
  todaydate: Date;
  //templateUrl = "./assets/Data/users.json";
  
  users: any;
  public errorMsg;
  constructor(private myservice: MyserviceService, private http: HttpClient) { }
  
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
        
    //this.http.get("http://jsonplaceholder.typicode.com/users") 
    //.pipe(map((response) => response.json())) //for http service

    //  this.http.get(this.templateUrl)
    //  .subscribe((data) => this.users = data);  
    this.myservice.getCompanyNames()
      .subscribe(data => this.users = data,
                  error => this.errorMsg = error);
  }
  
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
