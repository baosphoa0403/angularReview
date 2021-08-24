import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [MaterialComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [MaterialComponent],
})
export class MaterialModule {}
