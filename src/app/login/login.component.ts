import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'Prince'
password = ''
errorMessage = 'Invalid Credentials'
invalidLogin = false

//Router
//Angular.giveMeRouter
//Dependency Injection

  constructor(private router:Router,
    private hardcodedAuthenticatedService:HardcodedAuthenticationService,
    private basicAuthenticatedService:BasicAuthenticationService) { }

  ngOnInit() {
  }

  hadleLogin(){
    //console.log(this.username)
    //if(this.username==='in28minutes' && this.password === 'dummy'){
      if(this.hardcodedAuthenticatedService.authenticate(this.username,this.password)){  
    //Redirect to Welcome Page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

  hadleBasicAuthLogin(){
    //console.log(this.username)
    //if(this.username==='in28minutes' && this.password === 'dummy'){
      this.basicAuthenticatedService.executeAuthenticationService(this.username,this.password)
      .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome',this.username])
            this.invalidLogin=false
            console.log('Login successful')
          },
          error => {
            console.log(error)
            this.invalidLogin=true
          }
      )
    }
    
}
