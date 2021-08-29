import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public formSignUp!: FormGroup;

  constructor(private userService: UserService, private router: Router) {}
  onSubmit = () => {
    console.log(this.formSignUp.value);
    console.log(this.soDt?.errors);
    this.userService.signUp(this.formSignUp.value).subscribe((data) => {
      console.log(data);
      if (data) {
        alert('đăng ký thành tài khoản thành công');
        this.router.navigateByUrl('/login');
      }
    });
  };

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
      taiKhoan: new FormControl('', Validators.required),
      matKhau: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      soDt: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{5}'),
      ]),
      maNhom: new FormControl('GP01'),
      maLoaiNguoiDung: new FormControl('KhachHang'),
      hoTen: new FormControl('', Validators.required),
    });
    console.log(this.formSignUp.get('email'));
    console.log(this.formSignUp.get('taiKhoan')?.invalid);
  }

  get taiKhoan() {
    return this.formSignUp.get('taiKhoan');
  }
  get matKhau() {
    return this.formSignUp.get('matKhau');
  }
  get email() {
    return this.formSignUp.get('email');
  }
  get soDt() {
    return this.formSignUp.get('soDt');
  }
  get hoTen() {
    return this.formSignUp.get('hoTen');
  }

  @HostListener('window:beforeunload', ['$event'])
  canDeactive() {
    return !this.formSignUp.dirty;
  }
}
