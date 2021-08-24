import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss'],
})
export class NgIfComponent implements OnInit {
  name: string = 'bảo';
  flag: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  showAndHide(value: boolean): void {
    if (value) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  isLogin: boolean = false;
  login(): void {
    this.isLogin = true;
  }
  logout(): void {
    this.isLogin = false;
  }
  arrayColor = ['red', 'blue', 'yellow', 'black'];
  // arrayColor = [];
  isSelected = 'blue';

  handleOnChangeColor(value: string): void {
    console.log(value);
    this.isSelected = value;
  }
}
