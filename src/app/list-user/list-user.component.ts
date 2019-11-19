import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  auth_code:any={'auth_code':'test298'};
  userData;
  wholeData;
  constructor( public route: ActivatedRoute, private router: Router, public userService:UserService) { }

  ngOnInit() {
    this.getUserList(1);
  }

  getUserList(id){
    this.userService.getOperation('users?page='+id).subscribe(data=>{
      this.userData = data.data;
      this.wholeData = data;
      console.log(this.wholeData);
    },error=>{
      console.log(error);
    });
  }

  gotoViewUser(data){
    this.router.navigate(['view-user/'+data.id]);
  }

  getArrayFromNumber(l){
    return new Array(l);
  }

}
