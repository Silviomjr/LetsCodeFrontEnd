import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Login } from 'src/app/core/interface/Login';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(
    private httpClient: HttpClient,
  ) { }

  login(loginData: Login) {
    const loginBody = {
      login: loginData.login, 
      senha: loginData.password
    }
    return this.httpClient.post<any>(`/login/`, loginBody, this.options)
      .pipe(map((response) => {
        if(response) this.createAccessToken(response);
        return response;
      }))
  }

  public createAccessToken(accessToken: string) {
    localStorage.setItem("accessTokenLetsCode", accessToken);
  }

  getUser() {
    const user = localStorage.getItem("accessTokenLetsCode");
    if(user) return true;
    return false;
  }

  logout() {
    localStorage.removeItem("accessTokenLetsCode")
  }

  getToken() {
    const token = localStorage.getItem("accessTokenLetsCode");
    return token;
  }
}
