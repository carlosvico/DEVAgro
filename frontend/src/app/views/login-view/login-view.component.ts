import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/components/empresa/empresa.model';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  passwordType: string = 'password';
  passwordShow: boolean = false;

  empresa: Empresa;

  constructor() { }

  ngOnInit(): void {
  }

  // ========== MÉTODOS ==========
  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  login() {
  }
}