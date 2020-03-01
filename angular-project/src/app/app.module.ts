import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { NavBarComponent } from './shared-components/nav-bar/nav-bar.component';
import { BannerComponent } from './homepage/banner/banner.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    NavBarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
