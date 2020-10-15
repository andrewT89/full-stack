import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    WalletComponent,
    CreateWalletComponent,
    EditWalletComponent
  ],
})
export class WalletModule {}
