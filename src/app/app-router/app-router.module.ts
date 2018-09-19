import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRoutes } from '../routes/appRoutes'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    ),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
