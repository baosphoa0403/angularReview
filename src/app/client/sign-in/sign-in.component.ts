import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    const data = {
      taiKhoan: '1234',
      matKhau: '123@qweQ',
    };
    this.userService.login(data).subscribe((res: any) => {
      console.log(res);
    });
  }
  Submit(data: any): void {
    this.userService.login(data.value).subscribe((res) => {
      if (res) {
        alert('login success');
      }
    });
  }
}
