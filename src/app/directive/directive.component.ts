import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isactive :boolean=true;
  myfullname: string="";
  myemailid:string=" ";
  age1:number=0;
issub : boolean=false;


  mycolor: string[]=['red','blue','green','white']
  lstgender: string[]=['male' , 'female','other']

  students :any[]=[
    {id:1, firstname:'pratyu', lastname:'krothapalli', gender:'female',branch:"IT",dob:'01/01/1983', salary:50000 },
    {id:2, firstname:'murali', lastname:'ravuri', gender:'male',branch:"hr",dob:'01/01/1983',salary:70000},
    {id:3, firstname:'pavan', lastname:'krothapalli', gender:'male',branch:"IT",dob:'01/01/1983',salary:60000},
    {id:4, firstname:'akki', lastname:'ravuri', gender:'male',branch:"admin",dob:'01/01/1983',salary:20000},
    {id:5, firstname:'aashu', lastname:'ravuri', gender:'male',branch:"IT",dob:'01/01/1983',salary:30000},
    {id:6, firstname:'chinni', lastname:'krothapalli', gender:'female',branch:"IT",dob:'01/01/1983',salary:40000},
   {id:7, firstname:'chinna', lastname:'ravuri', gender:'male',branch:"IT",dob:'01/01/1983',salary:45000},

    
  ]


  constructor() { }
  submit(val1 :any , val2 :string,val3:any ) 
  {
  this.issub=true;
    this.myfullname=val1;
    this.myemailid=val2;
    this.age1=val3;
  }


 ngOnInit():  void {
  }
justcheck():boolean{
  return true;
  
    
    
    
    
}
  }

