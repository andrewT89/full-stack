import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    CartComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent,
    CartComponent,
  ],
})
export class ShareModule {}
