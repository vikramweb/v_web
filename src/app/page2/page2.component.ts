import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
   
  title2 = "Structural Directives";
  public languages = [
    { name: "Angular"},
    { name: "JavaScript"},
    { name: "Bootstrap"},
    { name: "CSS"},
    { name: "HTML"}
  ];

  isLoggedIn= true;
  
  taxRate = "state";
  public searchTxt: { name: string; }[];
  imageUrl = './assets/images/Indian_Flag.jpg';

  public products = [{
    productName: 'Shoes',
    isAvailable : true
    },
    {
    productName: 'Belts',
    isAvailable : true
    },
    {
    productName: 'Watches',
    isAvailable : false
    }];
  
    users = ["Vikram", "Vineesha", "Durgesh", "Zeeshan", "Rahul"];

    names = ['Vikram', 'Zeeshan', 'Durgesh', 'Vineesha'];
    myname=this.names[1];

    ngOnInit() {}

}
