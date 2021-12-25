import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AdminRoutingModule} from './admin-routing.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {AddTaskComponent} from './add-task/add-task.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
