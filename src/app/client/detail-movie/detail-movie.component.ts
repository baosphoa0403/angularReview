import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AboutServiceService } from '../service/about-service.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private service: AboutServiceService
  ) {}
  private detailMovieSub = new Subscription();
  detailMovie: any;

  ngOnInit(): void {
    this.getParameter();
    this.getDetailMovie();
  }

  getParameter = () => {
    // this.id = this.route.snapshot.params['id']; // cách này ko cảnh báo khi  id thay đổi
    this.route.paramMap.subscribe((paramMap: any) => {
      this.id = paramMap.get('id');
    });
    console.log(this.id);
  };
  getDetailMovie = () => {
    this.detailMovieSub = this.service
      .getDetailMovie(this.id)
      .subscribe((data: any) => {
        this.detailMovie = data;
      });
  };
  ngOnDestroy() {
    this.detailMovieSub.unsubscribe();
  }
}
