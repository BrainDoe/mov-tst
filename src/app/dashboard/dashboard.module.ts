import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { DashboardTopheaderComponent } from './pages/dashboard-topheader/dashboard-topheader.component';
import { DashboardSidebarComponent } from './pages/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { DashboardMainAreaComponent } from './components/dashboard-main-area/dashboard-main-area.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardTopheaderComponent,
    DashboardSidebarComponent,
    DashboardCardComponent,
    DashboardMainAreaComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
