import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private detailMovie = new BehaviorSubject({} as object);
  private display = new BehaviorSubject('' as string);
  private user = new BehaviorSubject(null);
  sharedDetailMovie = this.detailMovie.asObservable();
  sharedDisplay = this.display.asObservable();
  sharedUser = this.user.asObservable();
  // Muốn sử dụng biến toàn cục không thể sử dụng 1 property bình thường mà phải sử dụng đối tượng BehaviorSubject
  // currentUser.next(value) => Cập nhật giá trị cho biến currentUser
  // currentUser.value => Lấy ra giá trị của biến currentUser
  // currentUser.asObservable() => Chuyển currentUser thành 1 observable => mình có thể subcrible nó => mình có thể theo dõi sự thay đổi của biến này

  constructor() {}

  sharingDataDisplay = (flag: boolean) => {
    if (flag) {
      this.display.next('block');
    } else {
      this.display.next('none');
    }
  };

  sharingDataDetailMovie = (movie: any) => {
    this.detailMovie.next(movie);
  };

  sharingDataUser = (data: any) => {
    this.user.next(data);
  };
}
