import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  title = 'One way data binding title';
  imageUrl = './assets/images/Indian_Flag.jpg';
  colorVal = 'red';
  state = 'california';
  specialClass : true; nums: number;

  pageTitle:string = "Databind-String interpolation";
  btnStatus:boolean = true;
  changeTitle(){
    this.pageTitle = "Propertybinding";
  }

  callFunction(){
    alert("Function Called");
  }
  
  //username='';
  allowNums(){
    if(!this.nums) return 
    alert("Enter Nums only");
  }

  ngOnInit() {
  }

}
