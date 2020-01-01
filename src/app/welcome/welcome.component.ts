//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { resolve } from 'url';
//import{AppComponent} from '../app.component';

//@ComponentScan(
 // value="com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {

message = 'Some Welcome Meassage'
//String message = "Some Welcome Meassage";
name=''
welcomeMessageFromService:string

  //public SpringBootFirstWebApplication(){

  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) {

   }

//void init(){
  ngOnInit() : void{
    //COMPILATION ERROR this.message = 5
    //console.log(this.message);
    //this.route.snapshot.params['name']
    this.name=this.route.snapshot.params['name']; 
    console.log(this.name);
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().
    subscribe( response => this.handleSuccessfulResponse(response),
    error => this.hadleErrorReponse(error)
    );

    console.log(" last line welcome message , Hello!!");
  }

  getWelcomeMessageWithParameter(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServicePathVariable(this.name).
    subscribe( response => this.handleSuccessfulResponse(response),
    error => this.hadleErrorReponse(error)
    );

    console.log(" last line welcome message , Hello!!");
  }

  handleSuccessfulResponse(respons){
    this.welcomeMessageFromService = respons.message;
    console.log(respons.message);
  }
  hadleErrorReponse(error){
    this.welcomeMessageFromService = error.error.message;
    console.log(error.error.message);
  }

}

export class Class1{

}

export class Class2{

}

