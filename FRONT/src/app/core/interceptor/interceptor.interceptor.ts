import { AuthService } from './../../pages/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  headers: HttpHeaders = new HttpHeaders();
  url: string = "";
  
  constructor(
    private authService:AuthService,
  ) {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.startsWith("/")) {
      this.url = `${environment.apiUrl}${request.url}`;

      const accessToken = this.authService.getToken();


      console.log('accessToken', accessToken)

      if(accessToken) {
        this.headers = new HttpHeaders({
          Authorization: "Bearer " + accessToken,
        });
      }
    }

    const apiReq = request.clone({
      headers: this.headers,
      url: this.url,
    });
    
    return next.handle(apiReq);
  }
}
