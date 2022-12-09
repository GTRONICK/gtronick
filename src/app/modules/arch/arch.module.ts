import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchRoutingModule } from './arch-routing.module';
import { ArchComponent } from './components/arch-home/arch.component';
import { ArchStepsComponent } from './components/arch-steps/arch-steps.component';
import { HttpClientModule } from '@angular/common/http';
import { ArchHelpComponent } from './components/arch-help/arch-help.component'

@NgModule({
  declarations: [
    ArchComponent,
    ArchStepsComponent,
    ArchHelpComponent
  ],
  imports: [
    CommonModule,
    ArchRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ]
})
export class ArchModule { }
