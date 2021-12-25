import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import {Task} from "../../core/model/task.model";
import {DataService} from "../../core/service/data.service";
import {ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDetailComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public task: Task;
  public tasks: Task[] = [];
  public taskDetailForm: FormGroup = this.fb.group({
    task: '',
    isCompleted: false
  });

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private fb: FormBuilder
  ) {

    this.dataService.task$
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(el => this.tasks = el);

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('taskId'));
    this.task = this.tasks.find(el => productIdFromRoute === el.id) as Task;

    this.taskDetailForm.patchValue({
      task: this.task.task,
      isCompleted: this.task.isCompleted,
    })
    this.taskDetailForm.disable()
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
