import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../core/shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: any = null;
  userSubscription: Subscription | null = null;
  constructor(private sharedData: SharedService, private router: Router) {
    console.log(this.user);
  }

  ngOnInit(): void {
    this.userSubscription = this.sharedData.sharedUser.subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      }
    );
  }
  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }
  logout = () => {
    alert('good bye ' + this.user.hoTen);
    this.sharedData.sharingDataUser(null);
    this.router.navigateByUrl('/');
    localStorage.clear();
  };
}
