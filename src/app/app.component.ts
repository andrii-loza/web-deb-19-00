import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  todos: any[] = [];

  constructor(public userService: UserService,
              public todoService: TodoService) {
  }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    this.todos = await this.todoService.getTodos();
    console.log('todos', this.todos);
    console.log('users', this.users);
  }

}
