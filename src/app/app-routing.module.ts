import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'buy',
    loadChildren: () =>
      import('./pages/buy/buy.module').then((m) => m.BuyModule),
  },
  {
    path: 'market',
    loadChildren: () =>
      import('./pages/market/market.module').then((m) => m.MarketModule),
  },
  {
    path: 'sell',
    loadChildren: () =>
      import('./pages/sell/sell.module').then((m) => m.SellModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
