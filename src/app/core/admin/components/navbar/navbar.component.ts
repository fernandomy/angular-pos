import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  account!: string;

  constructor(private router: Router, private authS: AuthService) {}

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
    this.router.navigate(['/login']);
  }
}
