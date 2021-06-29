import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from './item/item.module';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ItemModule
  ]
})
export class ComponentsModule { }
