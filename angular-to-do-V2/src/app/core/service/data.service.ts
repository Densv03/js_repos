import {Inject, Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from "rxjs";
import {Task} from "../model/task.model";
import {defaultTasks} from "../provider/tasks.provider";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public taskSource: BehaviorSubject<Task[]>;

  constructor(@Inject(defaultTasks) defaultTasks: Task[]) {
    this.taskSource = new BehaviorSubject(defaultTasks)
  }

  get task$(): Observable<Task[]> {
    return this.taskSource.asObservable();
  }

  getTasks(): Task[] {
    return this.taskSource.getValue();
  }

  addTask(newTask: string): void {
    const arr = this.getTasks();
    arr.push({
      task: newTask,
      id: !this.getTasks().length ? 1 : arr[arr.length - 1].id + 1,
      isCompleted: false
    })
    this.taskSource.next(arr)
  }

  deleteTask(newTask: Task): void {
    let arr = this.getTasks().filter(el => el.id !== newTask.id);
    this.taskSource.next(arr);
  }

  saveTask(newTask: Task): void {
    const arr = this.getTasks();
    this.taskSource.next([...arr.slice(0, newTask.id - 1), newTask, ...arr.slice(newTask.id, arr.length)]);
  }
}
