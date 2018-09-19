import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from '../../list-item/list-item.component';
import { DetailItemComponent } from '../../detail-item/detail-item.component';
import { ItemDetailResolverService } from '../../item-detail-resolver.service';
import { SharedModule } from '../../shared/shared.module';
import { EditItemComponent } from '../../edit-item/edit-item.component';

const routes: Routes = [
  { path: '', component: ListItemComponent},
  { path: ':id', component: DetailItemComponent, resolve: { book: ItemDetailResolverService}},
  { path: ':id/edit', component: EditItemComponent, resolve: { book: ItemDetailResolverService}}

] 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    
  ],
  exports:[
    RouterModule
  ]
})
export class ItemRoutingModule { }
