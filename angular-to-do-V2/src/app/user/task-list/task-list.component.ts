import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

import {DataService} from "../../core/service/data.service";
import {Task} from "../../core/model/task.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  public task$: Observable<any>;
  public tasksList: Array<Task> = [];
  public tasksForm: FormGroup = this.fb.group({
    tasks: this.fb.array([]),
  });

  constructor(private dataService: DataService,
              private fb: FormBuilder) {
    this.task$ = this.dataService.task$;
    this.task$.subscribe(el => this.tasksList = el);
  }

  get formGroups(): FormArray {
    return this.tasksForm.get('tasks') as FormArray;
  }

  ngOnInit(): void {
    this.patch();
  }

  patch(): void {
    const control = <FormArray>this.tasksForm.get('tasks');
    this.tasksList.forEach(el => control.push(this.patchValues(el.task, el.isCompleted, el.id)));
    control.disable()
  }

  patchValues(task: string, isCompleted: boolean, id: number): FormGroup {
    return this.fb.group({
      task: [task],
      isCompleted: [isCompleted],
      id: [id],
    });
  }
}
