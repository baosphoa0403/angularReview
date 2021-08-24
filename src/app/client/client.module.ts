import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [{ path: 'about', component: AboutComponent }],
  },
];

@NgModule({
  declarations: [AboutComponent, ClientComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule {}
