import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}

