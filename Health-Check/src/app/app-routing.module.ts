import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/functional/alerts/alerts.component';
import { AnalyticsComponent } from './components/functional/analytics/analytics.component';
import { ApplicationSpecificComponent } from './components/functional/application-specific/application-specific.component';
import { RealtimeComponent } from './components/functional/realtime/realtime.component';
import { SystemOverviewComponent } from './components/functional/system-overview/system-overview.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { DashHomeComponent } from './components/pages/dash-home/dash-home.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'dashboard', component: DashHomeComponent },
	{ path: 'alerts', component: AlertsComponent },
	{ path: 'analytics', component: AnalyticsComponent },
	{ path: 'applicationSpecific', component: ApplicationSpecificComponent },
	{ path: 'realtime', component: RealtimeComponent },
	{ path: 'systemOverview', component: SystemOverviewComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
