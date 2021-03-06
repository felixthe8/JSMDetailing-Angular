import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule }   from '@angular/forms';
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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ScheduleServiceComponent } from './schedule-service/schedule-service.component';
import { FormContainerComponent } from './shared-components/form-container/form-container.component';



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
    PortfolioComponent,
    RegistrationComponent,
    ScheduleServiceComponent,
    FormContainerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
