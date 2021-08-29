import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SharedService } from 'src/app/core/shared/shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  constructor(private dataShared: SharedService) {}

  ngOnInit(): void {}
  viewFast = (movie: any) => {
    this.dataShared.sharingDataDisplay(true);
    this.dataShared.sharingDataDetailMovie(movie);
  };
}
