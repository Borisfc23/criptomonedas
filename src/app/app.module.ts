import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { UpPageComponent } from './partials/up-page/up-page.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, UpPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
