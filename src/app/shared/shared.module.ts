import { StepperComponent } from './stepper/stepper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastComponent } from './toast/toast.component';
import { PartitionPipe } from './pipes/partition.pipe';
import { PieMenuComponent } from './pie-menu/pie-menu.component';



@NgModule({
  declarations: [
    StepperComponent,
    ToastComponent,
    PartitionPipe,
    PieMenuComponent
  ],
  imports: [
    CommonModule,
    ClipboardModule
  ],
  exports: [
    StepperComponent,
    ToastComponent,
    PieMenuComponent,
    ClipboardModule,
    PartitionPipe
  ]
})
export class SharedModule { }
