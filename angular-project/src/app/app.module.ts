import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { NavBarComponent } from './shared-components/nav-bar/nav-bar.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { AboutComponent } from './homepage/about/about.component';
import { ProductsComponent } from './homepage/products/products.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { AboutLinksComponent } from './homepage/about-links/about-links.component';
import { PortfolioComponent } from './portfolio/portfolio.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    NavBarComponent,
    BannerComponent,
    AboutComponent,
    ProductsComponent,
    FooterComponent,
    AboutLinksComponent,
    PortfolioComponent
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
