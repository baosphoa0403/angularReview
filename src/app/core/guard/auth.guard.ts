import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    const person: any = localStorage.getItem('person');
    const a = JSON.parse(person);
    console.log(a);
    if (a?.maLoaiNguoiDung === 'QuanTri') {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
