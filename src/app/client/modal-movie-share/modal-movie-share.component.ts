import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/shared/shared.service';

@Component({
  selector: 'app-modal-movie-share',
  templateUrl: './modal-movie-share.component.html',
  styleUrls: ['./modal-movie-share.component.scss'],
})
export class ModalMovieShareComponent implements OnInit {
  movie: any;
  display!: string;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.sharedDetailMovie.subscribe((data: any) => {
      this.movie = data;
    });
    // console.log(this.movie);
    this.sharedService.sharedDisplay.subscribe((data: any) => {
      this.display = data;
      console.log(this.display);
    });
  }
  handleClose = () => {
    this.sharedService.sharingDataDisplay(false)  ;
  };
}
