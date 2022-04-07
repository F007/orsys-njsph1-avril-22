import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegaleComponent } from './routes/legale/legale.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legale', component: LegaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
