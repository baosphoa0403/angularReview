import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [SharedComponent, HighlightDirective],
  imports: [CommonModule],
  exports: [SharedComponent],
})
export class SharedModule {}
