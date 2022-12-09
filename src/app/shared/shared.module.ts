import { StepperComponent } from './stepper/stepper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastComponent } from './toast/toast.component';
import { PartitionPipe } from './pipes/partition.pipe';



@NgModule({
  declarations: [
    StepperComponent,
    ToastComponent,
    PartitionPipe
  ],
  imports: [
    CommonModule,
    ClipboardModule
  ],
  exports: [
    StepperComponent,
    ToastComponent,
    ClipboardModule,
    PartitionPipe
  ]
})
export class SharedModule { }
