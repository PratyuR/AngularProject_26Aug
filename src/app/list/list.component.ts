import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/general-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private api:GeneralApiService) { }
lst!:any[];
  ngOnInit(): void {
this.api.DisplayUserList().subscribe(data=>{
  console.log(data)
  this.lst=data;
})
  }

}
