import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchHelpComponent } from './components/arch-help/arch-help.component';
import { ArchComponent } from './components/arch-home/arch.component';
import { ArchStepsComponent } from './components/arch-steps/arch-steps.component';

const routes: Routes = [
  { path: '', component: ArchComponent },
  { path: 'steps', component: ArchStepsComponent },
  { path: 'help', component: ArchHelpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchRoutingModule { }
