import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {TaskListComponent} from "./task-list/task-list.component";

const routes: Routes = [
  {path: 'task/:taskId', component: TaskDetailComponent},
  {path: 'list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
