import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFirestoreModule}from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { FormsModule} from '@angular/forms';


const ROUTES=[
  {
    path: '',
    redirectTo: 'login',
   
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
     AngularFireModule.initializeApp(environment.fireConfig),
    RouterModule.forRoot(ROUTES),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
