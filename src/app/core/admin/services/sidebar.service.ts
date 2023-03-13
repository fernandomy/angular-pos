import { Injectable } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private offcanvas: NgbOffcanvas, config: NgbOffcanvasConfig) {
    config.scroll = true;
    config.backdrop = false;
    config.keyboard = true;
    config.panelClass = 'offcanvas';
  }
  open() {
    this.offcanvas.open(SidebarComponent);
  }
  close() {
    this.offcanvas.dismiss();
  }
}
