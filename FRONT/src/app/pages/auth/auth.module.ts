import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { AuthRoutingModule } from './auth.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    AuthRoutingModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,
    LoggedInGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
