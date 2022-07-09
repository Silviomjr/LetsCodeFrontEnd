import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loading: boolean = false;
  public validUser: boolean = false;
  public triggerUserError: boolean = false;

  public form = new FormGroup({
    login: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(6),
    ])),
    password: new FormControl("", [
      Validators.required, 
      Validators.minLength(6),
    ]),
  });

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  loginAction() {
    this.loading = true;
    
    this.authService.login(this.form.getRawValue()).subscribe((res: any) => {
      if(res) {
        this.triggerUserError = false;
        this.router.navigateByUrl('/kanban-board')
        return;
      }

      this.triggerUserError = true
      return
    })

    
    this.loading = false;
    
  }

}
