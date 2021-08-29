import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/core/shared/shared.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private sharedData: SharedService
  ) {}
  ngOnInit(): void {}
  Submit(data: any): void {
    this.userService.login(data.value).subscribe((res) => {
      if (res) {
        // console.log(res);
        alert('login success');
        localStorage.setItem('person', JSON.stringify(res));
        this.router.navigateByUrl('/lesson');
        this.sharedData.sharingDataUser(res);
      }
    });
  }
}
