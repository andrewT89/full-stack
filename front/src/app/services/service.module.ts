import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  UserService,
  WalletService,
  ProductsService,
  CartService,
} from './index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    WalletService,
    ProductsService,
    CartService,
  ],
  declarations: []
})
export class ServiceModule {
}
