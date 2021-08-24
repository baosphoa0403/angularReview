import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.scss'],
})
export class OneWayComponent implements OnInit {
  constructor() {}

  name: string = 'hello by gia bảo';
  ngOnInit(): void {}

  show(value: string): void {
    alert(value);
  }
}
