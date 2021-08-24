import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss'],
})
export class AddChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  addItem = (value: string) => {
    console.log(value);
    this.newItemEvent.emit(value);
  };
  constructor() {}

  ngOnInit(): void {}
}
