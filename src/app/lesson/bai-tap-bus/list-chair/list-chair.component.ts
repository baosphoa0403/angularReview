import { Component, OnInit } from '@angular/core';

interface Chair {
  SoGhe: Number;
  TenGhe: string;
  Gia: Number;
  TrangThai: boolean;
}
@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.scss'],
})
export class ListChairComponent implements OnInit {
  constructor() {}
  data = [
    { SoGhe: 1, TenGhe: 'số1', Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: 'số2', Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: 'số3', Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: 'số4', Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: 'số5', Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: 'số6', Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: 'số7', Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: 'số7', Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: 'số9', Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: 'số 10', Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: 'số 11', Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: 'số 12', Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: 'số 13', Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: 'số 14', Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: 'số 15', Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: 'số 16', Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: 'số 17', Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: 'số 18', Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: 'số 19', Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: 'số 20', Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: 'số 21', Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: 'số 22', Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: 'số 23', Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: 'số 24', Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: 'số 25', Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: 'số 26', Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: 'số 27', Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: 'số 28', Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: 'số 29', Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: 'số 30', Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: 'số 31', Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: 'số 32', Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: 'số 33', Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: 'số 34', Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: 'số 35', Gia: 100, TrangThai: false },
  ];
  findChair = (data: Chair) => {
    return this.arrayBooking.find((item: Chair) => {
      return item.SoGhe === data.SoGhe;
    });
  };
  arrayBooking: Chair[] = [];
  addChairParent = (value: Chair) => {
    // console.log(value);
    const chair = this.findChair(value);
    if (!chair) {
      value = { ...value, TrangThai: true };
      this.arrayBooking.push(value);
    } else {
      this.arrayBooking = this.arrayBooking.filter((item: Chair) => {
        return item.SoGhe != chair.SoGhe;
      });
    }
    console.log(this.arrayBooking);
  };

  ngOnInit(): void {}
}
