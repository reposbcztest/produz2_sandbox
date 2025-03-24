import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { MessageService } from 'primeng/api';

import { IntLogin } from '@produz/interfaces/IntLogin';
import { LoginService } from '@produz/service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  $destroy = new Subject();

  login: IntLogin = {};

  msg: string;

  helpIsHidden: Boolean = true;

  constructor(
    public router: Router,
    private loginService: LoginService,
    private messageService: MessageService // private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit(): void {}

  logar(form: NgForm) {
    var user = this.login.usuario;
    var pass = this.login.senha;

    if (form.valid) {
      if (this.loginService.login(this.$destroy, user, pass) == 'true') {
        //login succeed
        this.router.navigate(['/completo/inicio']); //Redireciona para a página inicial
      } else {
        //login failed
        this.msg = 'Usuário ou senha inválidos';
        this.helpIsHidden = false;
      }
    } else {
      this.msg = 'O usuário e senha não podem ser vazios';
      this.helpIsHidden = false;
    }
  }
}
