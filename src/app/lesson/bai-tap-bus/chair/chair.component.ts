import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface Chair {
  SoGhe: Number;
  TenGhe: string;
  Gia: Number;
  TrangThai: boolean;
}
@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss'],
})
export class ChairComponent implements OnInit {
  @Input() itemChair!: Chair;
  @Output() newItemEvent = new EventEmitter<Chair>();
  constructor() {}
  isSelected = false;
  handleSelected = (value: boolean) => {
    if (!this.isSelected) {
      this.isSelected = value;
    } else {
      this.isSelected = value;
    }
  };
  handleAddChair = (value: {
    SoGhe: Number;
    TenGhe: string;
    Gia: Number;
    TrangThai: boolean;
  }) => {
    // console.log(value);
    this.newItemEvent.emit(value);
  };

  ngOnInit(): void {}
}
