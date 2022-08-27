import { Component, OnInit } from '@angular/core';
import{GeneralApiService}from '../services/general-api.service';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
//  gender=['male','female','other']

  constructor(private api:GeneralApiService) { }
  gender=[];

  ngOnInit(): void {

    this.gender=this.api.getGender();
  }
  onsubmit(myform:any)
{
debugger;
  console.log(myform.value)
}
}


