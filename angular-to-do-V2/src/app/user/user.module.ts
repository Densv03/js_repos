import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {UserRoutingModule} from './user-routing.module';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {TaskListComponent} from './task-list/task-list.component';

@NgModule({
  declarations: [
    TaskDetailComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule {
}
