import { ScheduleServiceComponent } from './schedule-service/schedule-service.component';
import { RegistrationComponent } from './registration/registration.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'schedule-service',
    component: ScheduleServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
