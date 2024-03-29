import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo:Todo
  username:string
  constructor(private todoService : TodoDataService,
    private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.username = sessionStorage.getItem(AUTHENTICATED_USER)
    this.todo = new Todo(this.id,'',false,new Date())

    if(this.id != -1){
      this.todoService.reteriveTodo(this.username,this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo(){
    if(this.id === -1){
      this.todoService.createTodo(this.username,this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/todos'])
        }
      )
    }else{
      this.todoService.updateTodo(this.username,this.id,this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/todos'])
        }
      )
    }
  }

}
