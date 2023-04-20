import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, AdminRoutingModule, NgbModule, NgbOffcanvasModule],
})
export class AdminModule { }
