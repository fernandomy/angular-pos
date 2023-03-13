import { Component } from '@angular/core';
import {
  NgbActiveOffcanvas,
  NgbOffcanvasConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private sidebarS: SidebarService) {}

  close() {
    this.sidebarS.close();
  }
}
