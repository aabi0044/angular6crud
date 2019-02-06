import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afth:AngularFireAuth) { }
  signup(email,password){
return this.afth.auth.createUserWithEmailAndPassword(email,password);
  }
  login(email,password){
    return this.afth.auth.signInWithEmailAndPassword(email,password);
  }
}
