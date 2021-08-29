import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { window } from 'rxjs/operators';
import { SignUpComponent } from 'src/app/client/sign-up/sign-up.component';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root',
})
export class CandeactiveGuardGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(component: SignUpComponent) {
    return component.canDeactive();
  }
}
