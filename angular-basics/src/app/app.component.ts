import {Component, OnInit} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [];
  public todoTitle: string = '';
  public loading = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // this.fetchTodos();
  }

  addTodo() {
    if (this.todoTitle.trim()) {
      this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', {
        completed: false,
        title: this.todoTitle
      }).subscribe(el => {
        console.log(el);
        this.todos.push(el);
        this.todoTitle = ''
      });
    }
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(
        delay(10000)
      ).subscribe(todos => this.todos = todos);
    this.loading = false;
  }
}

