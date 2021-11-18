import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { IData } from './data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private apiserve: ApiService) {}
  stud!: IData;
  myform = new FormGroup({
    sname: new FormControl(null, {
      validators: [Validators.required, Validators.pattern('[a-zA-Z ]*')],
    }),
    sroll: new FormControl(null, {validators: [Validators.required, Validators.pattern('[0-9]|1[0-9]|2[0-4]')],}),
    dpt: new FormControl(null, {
      validators: [Validators.required],
    }),
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    phno: new FormControl(null, {
      validators: [Validators.required, Validators.pattern('[0-9]|1[0-9]|2[0-4]')],
    }),
  });

  ngOnInit(): void {}
  onSubmit() {
    this.apiserve.createUser(this.myform.getRawValue()).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    alert("Data send successfully")
  }
}
