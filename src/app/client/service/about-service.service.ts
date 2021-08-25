import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AboutServiceService {
  constructor(private http: HttpClient) {}
  // Observable<any>
  getListMovie = (): Observable<any> => {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  };

  getDetailMovie = (id: string): Observable<any> => {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error) => {
        return this.handleError(error);
      })
    );
  };
  handleError(error: any) {
    //Xử lý lỗi
    switch (error.status) {
      //Vì dụ status là mã lỗi: 401, 300, 402, 403...
      case 401:
        break;
      case 403:
        break;
      case 500:
        alert(error.error);
        break;

      default:
        break;
    }
    throwError(error);
    return error;
  }
}
