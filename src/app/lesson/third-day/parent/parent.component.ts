import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AddChildComponent } from '../add-child/add-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild(AddChildComponent)
  childAdd!: AddChildComponent;

  constructor() {}
  data = [
    { name: 'gấu', age: 19 },
    { name: 'hiếu', age: 21 },
    { name: 'hoa', age: 22 },
  ];
  ngOnInit(): void {}
  addItem = (value: string) => {
    this.data.push({ name: value, age: 10 });
  };
  ngAfterViewInit() {
    // child is set
    // console.log(this.childAdd.addItem('hello'));
  }
}
