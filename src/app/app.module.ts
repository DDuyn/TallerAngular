import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TranslatePipe } from './translate.pipe';
import { HttpClientModule } from '@angular/common/http'
import { CartItemComponent } from './cart-item/cart-item.component';
import { LoginComponent } from './login/login.component';
import { AppRouterModule } from './app-router/app-router.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TranslatePipe,
    CartItemComponent,
    LoginComponent
  ],
  imports: [
    CoreModule,
    AppRouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }