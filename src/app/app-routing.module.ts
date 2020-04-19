import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'credits',
    component: CreditsComponent
  },
  {
    path: 'country/:name',
    component: CountryComponent
  },
  {
    path: 'Details',
    redirectTo: '/details',
    pathMatch: 'full'
  },
  {
    path: 'country',
    redirectTo: '/details',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
