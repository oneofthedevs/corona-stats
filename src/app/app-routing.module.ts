import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { CreditsComponent } from "./credits/credits.component";

const routes: Routes = [
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/Home",
    pathMatch: "full"
  },
  {
    path: "Details",
    component: DetailsComponent
  },
  {
    path: "credits",
    component: CreditsComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
