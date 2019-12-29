import { Component, OnInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

// Future
// -No Navigation Menu and Footer 
// -Formatting - Bootsrap 
// -No Security for Menus 
// -Hardcoded Logic in the TodoList and Login Components 
// -Remaining Functionality - Edit , Delete , Add. 
// -Spring Boot 
// -Spring Security 

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos : Todo[]
// = [
//   new Todo(1,'Learn to Dance',false,new Date()),
//   new Todo(2,'Become an expert at angular',false,new Date()),
//   new Todo(3,'Visit India',false,new Date()),
//   new Todo(4,'Play Cricket',false,new Date()),
//   new Todo(5,'Become Rich',false,new Date()),

// ]
// [
//   {id:1,description:'Learn to Dance'},
//   {id:2,description:'Become an expert at angular'},
//   {id:3,description:'Visit India'},
//   {id:4,description:'Play Cricket'},
//   {id:5,description:'Become Rich'}
// ]


// todo = {
//   id:1,
//   description:'Learn to Dance'
// }

message : string

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.reteriveAllTodos('Prince').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo id ${id}`);
    this.todoService.deleteTodo('Prince',id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} successfull!`
        this.refreshTodos();
      }
    )
  }
  updateTodo(id){
    console.log(`Update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
