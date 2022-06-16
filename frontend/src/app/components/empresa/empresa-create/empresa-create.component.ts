import { Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.scss']
})
export class EmpresaCreateComponent implements OnInit {
  passwordShow: boolean = false;
  passwordShow2: boolean = false;
  passwordType: string = 'password';
  passwordType2: string = 'password';

  empresa: Empresa = {
    nome: '',
    email: '',
    cnpj: '',
    endereco: '',
    senha: ''
  }


  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  }

  togglePassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

  toggleRetypePassword() {
    if (this.passwordShow2) {
      this.passwordShow2 = false;
      this.passwordType2 = 'password';
    } else {
      this.passwordShow2 = true;
      this.passwordType2 = 'text';
    }
  }

  createEmpresa(): void {
    let senha = document.getElementById('senha2') as HTMLInputElement;
    if (!this.validatePassword(this.empresa.senha, senha.value.trim())) {
      this.empresaService.showMessage("Senhas não conferem");
      throw new Error('Senhas não conferem');
    }
    if (this.inputValidator()) {
      this.empresaService.create(this.empresa).subscribe(() => {
        this.empresaService.showMessage("Empresa cadastrada com sucesso!");
        this.router.navigate(['/']);
      })
    } else {
      this.empresaService.showMessage("Preencha todos os campos!");
    }
  }

  navigateToLogiIn(): void {
    this.router.navigate(['/']);
  }

  private inputValidator(): boolean {
    let senha2 = document.getElementById('senha2') as HTMLInputElement;
    console.log(senha2.value.trim());

    if (this.empresa.nome.trim() === '' || this.empresa.email.trim() === '' || this.empresa.cnpj.trim() === '' || this.empresa.endereco.trim() === '' || this.empresa.senha.trim() === '' || senha2.value.trim() === '') {
      if (this.empresa.nome.trim() === '') {
        document.getElementById('nome').classList.add('required');
      }
      else {
        document.getElementById('nome').classList.remove('required');
      }

      if (this.empresa.email.trim() === '') {
        document.getElementById('email').classList.add('required');
      }
      else {
        document.getElementById('email').classList.remove('required');
      }

      if (this.empresa.cnpj.trim() === '') {
        document.getElementById('cnpj').classList.add('required');
      }
      else {
        document.getElementById('cnpj').classList.remove('required');
      }

      if (this.empresa.endereco.trim() === '') {
        document.getElementById('endereco').classList.add('required');
      }
      else {
        document.getElementById('endereco').classList.remove('required');
      }

      if (this.empresa.senha.trim() === '') {
        document.getElementById('senha').classList.add('required');
      }
      else {
        document.getElementById('senha').classList.remove('required');
      }
      if (senha2.value.trim() === '') {
        document.getElementById('senha2').classList.add('required');
      }
      else {
        document.getElementById('senha2').classList.remove('required');
      }
      return false;
    }
    else {
      return true;
    }

  }

  private validatePassword(senha: string, senha2: string) {
    if (senha !== senha2) {
      document.getElementById('senha2').classList.add('required');
      return false;
    }
    else {
      document.getElementById('senha2').classList.remove('required');
      return true;
    }
  }

}

