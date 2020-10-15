import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
  },
  {
    path: 'create',
    component: CreateWalletComponent,
  },
  {
    path: ':id',
    component: EditWalletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletRoutingModule {}
