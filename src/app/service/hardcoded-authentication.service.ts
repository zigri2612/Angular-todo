import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    //console.log('Before '+this.isUserLoggedIn());
    
    if(username==='in28minutes' && password === 'dummy'){
      sessionStorage.setItem('authenticaterUser',username)
      //console.log('After '+this.isUserLoggedIn());
      return true;
    }

  }

   isUserLoggedIn(){
     let user = sessionStorage.getItem('authenticaterUser')
      return !(user === null)
    }

    logout(){
        sessionStorage.removeItem("authenticaterUser")
    }

}
