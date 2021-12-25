import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import {DataService} from "../../core/service/data.service";
import {map, takeUntil} from "rxjs/operators";
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public taskDetailForm: FormGroup = this.fb.group({
    id: 0,
    task: '',
    isCompleted: false,
  });

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private fb: FormBuilder) {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('taskId'));
    this.dataService.task$
      .pipe(
        map(el => el.filter(v => v.id === productIdFromRoute)),
        map(el => el[0]),
        takeUntil(this.destroyed$)
      )
      .subscribe(data => {
        if (data)
          this.taskDetailForm.patchValue({task: data.task, id: data.id, isCompleted: data.isCompleted})
      });
  }

  saveTask(): void {
    this.dataService.saveTask({
      task: this.taskDetailForm.value.task, id: this.taskDetailForm.value.id,
      isCompleted: this.taskDetailForm.value.isCompleted
    })
  }

  deleteTask(): void {
    this.dataService.deleteTask({
      task: this.taskDetailForm.value.task, id: this.taskDetailForm.value.id,
      isCompleted: this.taskDetailForm.value.isCompleted
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
