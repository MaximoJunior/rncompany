import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCompanyScreenComponent } from './components/create-company-screen/create-company-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ManageCompanyScreenComponent } from './components/manage-company-screen/manage-company-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'create-company', component: CreateCompanyScreenComponent },
  { path: 'manage-company', component: ManageCompanyScreenComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
