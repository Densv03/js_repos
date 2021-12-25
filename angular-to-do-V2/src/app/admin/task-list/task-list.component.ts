import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

import {DataService} from "../../core/service/data.service";
import {Task} from "../../core/model/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  public tasksList: Array<Task> = [];
  public tasksForm: FormGroup = this.fb.group({
    tasks: this.fb.array([]),
  });


  constructor(private dataService: DataService,
              private fb: FormBuilder) {
    this.dataService.task$.subscribe(el => {
      const formArrLength = this.taskControls.value.length;

      for (let i = el.length; i > formArrLength; i--) {
        this.taskControls.push(this.createGroup());
      }
      this.taskControls.patchValue(el);
    });
  }

  get taskControls(): FormArray {
    return this.tasksForm.get('tasks') as FormArray;
  }

  ngOnInit(): void {
  }

  // patch(): void {
  //   const control = <FormArray>this.tasksForm.get('tasks');
  //   this.tasksList.forEach(el => control.push(this.patchValues(el.task, el.isCompleted, el.id)));
  // }

  createGroup(): FormGroup {
    return this.fb.group({
      // task: [task.task],
      // isCompleted: [task.isCompleted],
      // id: [task.id],
      task: '',
      isCompleted: '',
      id: '',
    });
  }

  saveTask(newTask: Task): void {
    this.dataService.saveTask(newTask);
  }
}
