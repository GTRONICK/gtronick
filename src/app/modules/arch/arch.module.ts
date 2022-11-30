import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchRoutingModule } from './arch-routing.module';
import { ArchComponent } from './arch.component';


@NgModule({
  declarations: [
    ArchComponent
  ],
  imports: [
    CommonModule,
    ArchRoutingModule
  ]
})
export class ArchModule { }
