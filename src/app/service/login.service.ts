import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  url: string = '/';

  private token: string;

  constructor(private http: HttpClient) {}

  login($destroy, usuario?: string, senha?: string) {
    // let payload = {
    //   userName: usuario,
    //   password: senha,
    //   grantType: 'password',
    // };

    this.token = 'false';

    if (usuario == 'produz' && senha == 'produz') {
      this.token = 'true';
    }

    return this.token;
    // return this.http
    //   .post<any>(`${this.url}`, payload, { withCredentials: true })
    //   .pipe(takeUntil($destroy));
  }

  getToken() {
    return this.token;
  }

  isLoggedIn() {
    return !!this.token;
  }
}
