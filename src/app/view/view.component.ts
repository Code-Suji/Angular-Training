import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {



  constructor(private apiserve: ApiService) { }

  flag:number=0
  data:any

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Hello")
    this.flag=1;
    this.data = this.apiserve.getData()
  }

}
