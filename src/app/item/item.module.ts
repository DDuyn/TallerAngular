import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../list-item/list-item.component';
import { DetailItemComponent } from '../detail-item/detail-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterItemsPipe } from '../filter-items.pipe';
import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item-routing/item-routing.module';
import { EditItemComponent } from '../edit-item/edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ItemRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListItemComponent,
    DetailItemComponent,
    EditItemComponent
  ],
  exports: [
    ListItemComponent,
    DetailItemComponent,
    EditItemComponent
  ]
})
export class ItemModule { }
