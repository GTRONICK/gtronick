import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchComponent } from './arch.component';

const routes: Routes = [{ path: '', component: ArchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchRoutingModule { }
