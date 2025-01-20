import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { ProductComponent } from './feature/product/product.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { RbaGuard } from './core/guards/rba.guard';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'products',component:ProductComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[RbaGuard],data: { role: ['admin'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
