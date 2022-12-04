import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HosComponent } from './hos/hos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoDetailComponent } from './ho-detail/ho-detail.component';

const routes: Routes = [
  { path: 'hos', component: HosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }