import { AuthService } from './../../pages/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor(
    private authService:AuthService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

}
