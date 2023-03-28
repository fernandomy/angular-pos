import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  account!: string;

  constructor(
    private router: Router,
    private authS: AuthService,
    private sidebarS: SidebarService,
    private offcanvas: NgbOffcanvas
  ) {}

  ngOnInit(): void {
    this.authS.currentUser().subscribe({
      next: (user) => {
        this.account = user?.email ?? '';
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  logout() {
    this.authS.logout();
    this.router.navigate(['login']);
  }

  showSidebar() {
    if (this.offcanvas.hasOpenOffcanvas()) {
      this.sidebarS.close();
    } else {
      this.sidebarS.open();
    }
  }
}
