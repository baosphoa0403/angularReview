import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { FirstDayComponent } from './first-day/first-day.component';
import { DataBindingComponent } from './first-day/data-binding/data-binding.component';
import { OneWayComponent } from './first-day/data-binding/one-way/one-way.component';
import { SecondDayComponent } from './second-day/second-day.component';
import { DirectivesComponent } from './second-day/directives/directives.component';
import { StructureDirectiveComponent } from './second-day/directives/structure-directive/structure-directive.component';
import { NgIfComponent } from './second-day/directives/structure-directive/ng-if/ng-if.component';
import { ThirdDayComponent } from './third-day/third-day.component';
import { ParentComponent } from './third-day/parent/parent.component';
import { ChildComponent } from './third-day/child/child.component';
import { AddChildComponent } from './third-day/add-child/add-child.component';
import { BaiTapBusComponent } from './bai-tap-bus/bai-tap-bus.component';
import { ListChairComponent } from './bai-tap-bus/list-chair/list-chair.component';
import { ChairComponent } from './bai-tap-bus/chair/chair.component';
import { ShowListOrderComponent } from './bai-tap-bus/show-list-order/show-list-order.component';

@NgModule({
  declarations: [
    LessonComponent,
    FirstDayComponent,
    DataBindingComponent,
    OneWayComponent,
    SecondDayComponent,
    DirectivesComponent,
    StructureDirectiveComponent,
    NgIfComponent,
    ThirdDayComponent,
    ParentComponent,
    ChildComponent,
    AddChildComponent,
    BaiTapBusComponent,
    ListChairComponent,
    ChairComponent,
    ShowListOrderComponent,
  ],
  imports: [CommonModule],
  exports: [LessonComponent],
})
export class LessonModule {}
