import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {DataService} from "../../core/service/data.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent implements OnInit {

  public addTaskFrom: FormGroup = this.fb.group({
    newTask: ['', Validators.required]
  });

  constructor(private dataService: DataService,
              private fb: FormBuilder) {
  }

  addTask(): void {
    this.addTaskFrom.markAllAsTouched();
    if (this.addTaskFrom.valid) {
      this.dataService.addTask(this.addTaskFrom.value.newTask);
      this.addTaskFrom.reset();
    }
  }

  ngOnInit(): void {
  }
}
