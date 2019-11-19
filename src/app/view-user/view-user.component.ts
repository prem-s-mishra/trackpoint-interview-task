import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  u_id:any;
  userData:any;
  constructor(public route: ActivatedRoute, private router: Router,public userService:UserService) { }

  ngOnInit() {    
    this.route.params.subscribe(params => { 
    this.u_id = params['id'];
    if(this.u_id){
      this.getSingleUserDetails();
    }
  });
  }

  getSingleUserDetails(){
    this.userService.getOperation('users/'+this.u_id).subscribe(data=>{
      this.userData = data.data;
      console.log(this.userData);
    },error=>{
      console.log(error);
    });
  }

  gotoList(){
    this.router.navigate(['list-user/']);
  }

}
