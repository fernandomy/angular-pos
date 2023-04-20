import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private router = inject(Router)
  private sidebar = inject(SidebarService)
  title = 'angular-pos';

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // La ruta ha cambiado
        // console.log('Ruta cambiada:', event.url);
        // Puedes realizar cualquier acción necesaria aquí
        this.sidebar.close()
      }
    });
  }
}
