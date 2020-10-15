import { Routes, RouterModule } from '@angular/router';

const pagesRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'wallets',
    loadChildren: () => import('./wallet/wallet.module').then((m) => m.WalletModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule),
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
