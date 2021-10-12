import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDialogComponent } from './baseDialog/baseDialog.component';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [BaseDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DialogModule { }
