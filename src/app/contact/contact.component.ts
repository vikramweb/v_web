import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  rFrom: FormGroup;
  post: any;        //A property for our submitted form
  description: string = '';
  name: string = '';
  titleAlert1: string = 'This field is required';
  titleAlert2: string = '30 to 500 charexters are required';

  constructor(private fb: FormBuilder) {
    this.rFrom = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });
  }
  
  ngOnInit(){
    this.rFrom.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rFrom.get('name').setValidators([Validators.required, Validators.minLength(3)])
          this.titleAlert1 = "You need to specify at least 3 charecters";
        } else {
          this.rFrom.get('name').setValidators(Validators.required);
        }
        this.rFrom.get('name').updateValueAndValidity();
      }
    ) 
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

}
