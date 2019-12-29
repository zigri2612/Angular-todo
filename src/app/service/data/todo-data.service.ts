import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  reteriveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    console.log("Hello World Service");
  }

  deleteTodo(username,id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  reteriveTodo(username,id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username,id,todo){
    return this.http.put(
      `${API_URL}/users/${username}/todos/${id}`
      ,todo);
  }

  createTodo(username,todo){
    return this.http.post(
      `${API_URL}/users/${username}/todos`
      ,todo);
  }

}
