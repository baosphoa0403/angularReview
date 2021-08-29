import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { MovieComponent } from './movie/movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShortCutPipe } from './short-cut.pipe';
import { ModalMovieShareComponent } from './modal-movie-share/modal-movie-share.component';
// import { ShortCutPipePipe } from './short-cut.pipe';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [{ path: 'about', component: AboutComponent }],
  },
  {
    path: '',
    component: ClientComponent,
    children: [{ path: 'detail-movie/:id', component: DetailMovieComponent }],
  },
];

@NgModule({
  declarations: [
    AboutComponent,
    ClientComponent,
    MovieComponent,
    DetailMovieComponent,
    SignInComponent,
    SignUpComponent,
    ShortCutPipe,
    ModalMovieShareComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ClientModule {}
