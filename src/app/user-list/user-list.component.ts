import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../services/general-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api:GeneralApiService) { }
  userList:any[]=[];

  ngOnInit(): void {
    this.api.DisplayUserList().subscribe(Response=>
      {
        debugger;
      console.log(Response)
      this.userList=Response;
  }
    )

  }
}
