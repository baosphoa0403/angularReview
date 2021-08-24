import { Component, Input, OnInit } from '@angular/core';

interface Chair {
  SoGhe: Number;
  TenGhe: string;
  Gia: Number;
  TrangThai: boolean;
}
@Component({
  selector: 'app-show-list-order',
  templateUrl: './show-list-order.component.html',
  styleUrls: ['./show-list-order.component.scss'],
})
export class ShowListOrderComponent implements OnInit {
  @Input() chairBooking!: Chair;

  constructor() {
    // console.log(this.arrayBooking);
  }

  ngOnInit(): void {
    // console.log(this.arrayBooking);
  }
  ngAfterViewInit(): void {
    // console.log(this.arrayBooking);
  }
}
