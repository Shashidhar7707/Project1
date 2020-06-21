import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentoneComponent } from './componentone/componentone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //this makes the app to mavigate directily to dashboard
  { path: 'componentone', component: ComponentoneComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({  //initializes the router and starts listening for browser location changes
  // declarations: [],
  imports: [RouterModule.forRoot(routes)], //adds routermodule to the AppRoutingModule imports array and configures it with the routes by calling it
  exports: [RouterModule]
    // CommonModule
   

})
export class AppRoutingModule { }
