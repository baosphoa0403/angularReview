import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoAngularComponent } from '../demo-angular/demo-angular.component';
import { LessonComponent } from '../lesson/lesson.component';
import { MaterialComponent } from '../material/material.component';
import { PageNotFoundComponent } from '../page-not-found-component/page-not-found-component.component';
import { ClientModule } from '../client/client.module';

const routes: Routes = [
  {
    path: '',
    component: DemoAngularComponent,
  },
  {
    path: 'lesson',
    component: LessonComponent,
  },
  {
    path: 'client',
    // loadChildren: () => ClientModule,
    loadChildren: () =>
      import('../client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'material',
    component: MaterialComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
