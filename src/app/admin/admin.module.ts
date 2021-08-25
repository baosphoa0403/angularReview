import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: 'dashboard', component: DashboardComponent }],
  },
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
