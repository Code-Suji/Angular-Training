import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { IData } from './data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiserve: ApiService) { }
  stud!: IData
  myform = new FormGroup({
    sname: new FormControl(null, {
      validators:[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')]}),
    sroll: new FormControl(null, {
      validators:[
        Validators.required,
        Validators.pattern('/\-?\d*\.?\d{1,2}/')]}),
    dpt: new FormControl(null, {
      validators:[
        Validators.required,
        ]}),
    email: new FormControl(null, {
      validators:[
        Validators.required,
        Validators.email]}),
    phno: new FormControl(null, {
      validators:[
        Validators.required,
        Validators.minLength(10)]}),
  })

  ngOnInit(): void {
  }
  onSubmit() {
    this.apiserve.createUser(this.myform.getRawValue()).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

}


