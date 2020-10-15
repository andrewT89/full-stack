import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
