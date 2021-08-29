import { Component } from '@angular/core';
import { SharedService } from './core/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  constructor(private sharedData: SharedService) {}
  ngOnInit(): void {
    const user = localStorage.getItem('person');
    if (user) {
      this.sharedData.sharingDataUser(JSON.parse(user));
    }
  }
}
