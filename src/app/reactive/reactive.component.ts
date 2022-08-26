import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms'
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  reactiveForm!:FormGroup;
  formdata={firstname:"",lastname:"",emailid:"",mobilenum:0,gender:"" }
  gender=['male','female','other']

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      'fname':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      'lname':new FormControl(''),
      'mailid':new FormControl('',[Validators.required,Validators.email]),
      'mnum':new FormControl(''),
      'gender':new FormControl(''),

    })
  }
  onSubmit(form:FormGroup)
  {
    debugger;
    this.formdata.firstname=this.reactiveForm.value.fname;
    this.formdata.lastname=this.reactiveForm.value.lname;
    this.formdata.emailid=this.reactiveForm.value.mailid;
    this.formdata.mobilenum=this.reactiveForm.value.mnum;
    this.formdata.gender=this.reactiveForm.value.gender;
    console.log(this.formdata);
    

  }
  Reset()
  {
    this.reactiveForm.reset();

  }

}
