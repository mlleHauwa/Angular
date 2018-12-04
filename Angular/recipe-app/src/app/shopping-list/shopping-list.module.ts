import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingListComponent],
  exports:[ShoppingListComponent]
})
export class ShoppingListModule { }
