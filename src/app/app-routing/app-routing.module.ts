import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoAngularComponent } from '../demo-angular/demo-angular.component';
import { LessonComponent } from '../lesson/lesson.component';
import { MaterialComponent } from '../material/material.component';
import { PageNotFoundComponent } from '../page-not-found-component/page-not-found-component.component';
import { ClientModule } from '../client/client.module';
import { SignInComponent } from '../client/sign-in/sign-in.component';
import { SignUpComponent } from '../client/sign-up/sign-up.component';
import { CandeactiveGuardGuard } from '../core/guard/candeactive-guard.guard';

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
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'material',
    component: MaterialComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    // canDeactivate: [CandeactiveGuardGuard]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
