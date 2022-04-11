import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { LocationReloadService } from './services/location-reload.service';
import { GoalsComponent } from './components/goals/goals.component';

// OOP ---> Decorator
// Team work -- collboration -- DRY
// TDD - TEST DRIVEN DEVELOPMENT
// Resusable Logic

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ThankYouComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LocationReloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
