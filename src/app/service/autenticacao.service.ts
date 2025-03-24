import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

// import { createStorage } from 'persistme';

// const appStorage = createStorage(environment.APP_KEY);

@Injectable()
export class AutenticacaoService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  url: string;

  optionsAPI(isAdmin: boolean, params?: any, body?: any) {
    //const token = appStorage.get('accessToken');
    //const authorization = `${isAdmin ? 'Admin' : 'Bearer'} ${token}`;
    const options = {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //Authorization: null,
      }),
      params,
      body,
    };
    return options;
  }

  validarToken(): Promise<boolean> {
    const options = this.optionsAPI(false);

    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.url}/auth/status`, options)
        .toPromise()
        .then((resultado) => {
          resolve(true);
        })
        .catch((error) => {
          reject(false);
        });
    });
  }

  armazenarDados(login: any) {
    // appStorage.set('login', login['data']);
  }
}
