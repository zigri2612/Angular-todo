import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

export class HelloWorldBean{
   constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient,
    private basicAuthenticationService:BasicAuthenticationService
    ) { }

  executeHelloWorldBeanService(){
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    // let headers = new HttpHeaders({
    //   Authorization:basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean',
    //{headers}
    );
    console.log("Hello World Service");
  }

  executeHelloWorldBeanServicePathVariable(name){
    //let basicAuthHeaderString = this.createBasicAuthenticationHeader();
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    {headers}
    );
    console.log("Hello World Service");
  }

  // createBasicAuthenticationHeader(){
  //   let username = 'Prince';
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic '+window.btoa(username+':'+password); 
  //   return basicAuthHeaderString;
  // }
  //in28minutes:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  //in28minutes:1 Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/in28minutes' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
}
