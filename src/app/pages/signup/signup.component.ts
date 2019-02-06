import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user={
  name:'',
  email:'',
  password:''

}
responce;
  constructor(private auth:AuthService,private api:ApiService) { }

  ngOnInit() {
  }
createUser(){
this.auth.signup(this.user.email,this.user.password).then(res=>{
  console.log(res);
  this.responce=res;
  let id= this.responce.user.uid;
  let data={
    name:this.user.name,
    email:this.user.email,
    password:this.user.password
  }
  this.api.createUser(id,data).then(res=>{
    console.log(res);
  })

});

}

}
