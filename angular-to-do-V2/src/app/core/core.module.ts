import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataService} from "./service/data.service";
import {TasksProvider} from "./provider/tasks.provider";

@NgModule({
  declarations: [],
  providers: [
    DataService,
    TasksProvider
  ],
  imports: [
    CommonModule
  ],
})
export class CoreModule {
}
