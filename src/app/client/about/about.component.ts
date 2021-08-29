import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutServiceService } from '../service/about-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutServiceService: AboutServiceService) {}
  listFilm: any[] = [];
  
  private subListFilm = new Subscription();

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie = () => {
    this.subListFilm = this.aboutServiceService
      .getListMovie()
      .subscribe((data: any) => {
        this.listFilm = data;
        console.log(this.listFilm);
      });
  };

  ngOnDestroy() {
    this.subListFilm.unsubscribe();
  }
}
