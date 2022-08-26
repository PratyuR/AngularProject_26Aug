import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  selecteditem :string="";
  productlist:string[]=['default','tv','mobile','laptop','washingmachine']
  cssclass : string="class1,class2" ;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  selectitem(val:any)
  {
    this.selecteditem=val.target.value;
  }


}
