import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
firstname :string ="pratyu";
lastname : string="sha";
age :number=30;
mailid : any="sample.gmail.com";
gender : string="";
address :any='abcd';
lasteducation : string="engineering";
imgurl : string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSyGbsp2akKFy4ErTzKRxxaYk85DiRPLf9qY6Ai3Uxw&";
isshow : boolean  =false;
showimage()
{
  this.isshow=true;

}
hideimage()
{
  this.isshow=false;

}






































































  constructor() { }

  ngOnInit():void {
  }

}
