import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChefComponent } from './chef/chef/chef.component';
import { HomeComponent } from './Homepage/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chef/:id', component: ChefComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
