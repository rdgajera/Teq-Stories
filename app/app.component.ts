import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  model: any = {};
  forms : FormGroup;
  
  submitted = false;
  constructor(private formBuilder : FormBuilder){

  }
  ngOnInit(){
    this.forms = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get f(){
    return this.forms.controls;
  }
  onSubmit() {
    this.submitted = true;
    if(this.forms.invalid){
      return;
    }
    console.log(this.model.email + ' ' + this.model.password);
  }
}
