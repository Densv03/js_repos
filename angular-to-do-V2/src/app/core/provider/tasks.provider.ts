import {InjectionToken} from "@angular/core";
import {Task} from "../model/task.model";

export const defaultTasks = new InjectionToken('default.tasks')

const taskList: Task[] = [
  {
    task: 'Visit university',
    id: 1,
    isCompleted: false
  },
  {
    task: 'Fix bugs',
    id: 2,
    isCompleted: true
  },
  {
    task: 'Pay for internet',
    id: 3,
    isCompleted: false
  }
];

export let TasksProvider = {
  provide: defaultTasks,
  useValue: taskList,
};
