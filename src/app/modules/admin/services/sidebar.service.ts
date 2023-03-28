import { Injectable } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(
    private offcanvas: NgbOffcanvas,

    config: NgbOffcanvasConfig
  ) {
    config.scroll = true;
    config.backdrop = true;
    config.keyboard = true;
    config.panelClass = 'offcanvas';
    config.container = '#mycontainer';
    config.backdropClass = 'backdrop';
  }
  open() {
    this.offcanvas.open(SidebarComponent);
  }
  close() {
    this.offcanvas.dismiss();
  }
}
