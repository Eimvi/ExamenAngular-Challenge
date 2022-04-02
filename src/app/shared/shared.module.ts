import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AlertModule } from './alert/alert.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    AlertModule
  ],
  exports: [
    ToolbarModule
  ]
})
export class SharedModule { }
