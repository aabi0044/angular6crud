import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

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
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
createUser(){
this.auth.signup(this.user.email,this.user.password).then(res=>{
  console.log(res);

});
}

}
