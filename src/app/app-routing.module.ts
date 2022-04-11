import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './components/goals/goals.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
/// Modular JavaScript

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "thank-you", component: ThankYouComponent},
  {path: "goals", component: GoalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
