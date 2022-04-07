import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegaleComponent } from './routes/legale/legale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legale', component: LegaleComponent },
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
