import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { DashHomeComponent } from './components/pages/dash-home/dash-home.component';
import { SystemOverviewComponent } from './components/functional/system-overview/system-overview.component';
import { ApplicationSpecificComponent } from './components/functional/application-specific/application-specific.component';
import { AnalyticsComponent } from './components/functional/analytics/analytics.component';
import { RealtimeComponent } from './components/functional/realtime/realtime.component';
import { AlertsComponent } from './components/functional/alerts/alerts.component';
import { SideNavComponent } from './components/parts/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AboutPageComponent,
    DashHomeComponent,
    SystemOverviewComponent,
    ApplicationSpecificComponent,
    AnalyticsComponent,
    RealtimeComponent,
    AlertsComponent,
    SideNavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
