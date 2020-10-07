import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any[] = [];
  todos: any[] = [];

  constructor() {
    localStorage.clear();
    let user = {
      name: 'andriy',
      role: Math.random() >= 0.5 ? 'admin' : 'user'
    }

    localStorage.setItem('user', JSON.stringify(user));
  } 

}
