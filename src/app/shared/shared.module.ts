import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterItemsPipe } from '../filter-items.pipe';
import { QuantityItemComponent } from '../quantity-item/quantity-item.component';
import { FormsModule } from '@angular/forms';
import { RatingModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    FilterItemsPipe,
    QuantityItemComponent
  ],
  exports: [
    FilterItemsPipe,
    QuantityItemComponent,
    RatingModule,
    ModalModule
  ]
})
export class SharedModule { }
