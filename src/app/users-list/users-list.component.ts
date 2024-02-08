import { Component } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  userList:any;
  showDetails:boolean=false;
  selectedUser:any;
  showSpinner:boolean=true;

  constructor(private api:UserApiService){
    this.getUserList();
  }

  public getUserList(){
    this.api.getUsers().pipe(first()).subscribe(
      (resp)=>{
          this.showSpinner=false;
          this.userList=resp;
          console.log("Users is:",resp);
      },err=>{
         console.log("No user found");
      }
    )
  }

  public getUserDetails(data:any){
    this.showDetails=true;
    this.selectedUser=data;
    console.log("Selected user:",data);
  }
}
