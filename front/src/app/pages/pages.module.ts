import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareModule } from '../shared/share.module';
import { PAGES_ROUTES } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ShareModule,
    PAGES_ROUTES
  ],
  declarations: [PagesComponent],
  exports: [NgbModule]
})
export class PagesModule { }
