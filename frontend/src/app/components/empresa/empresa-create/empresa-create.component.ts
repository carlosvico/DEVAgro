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
    email:'',
    cnpj: '',
    endereco: '',
    senha: ''
  }

  empresas: Empresa[];


  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
    this.empresaService.read().subscribe(empresas => {
      this.empresas = empresas;
    });
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
    let email = document.getElementById('email') as HTMLInputElement;
    if(this.empresas.find(empresa => empresa.email == email.value.trim()) != undefined){
      this.empresaService.showMessage('Email cadastrado ou inválido!', true);
    }else{
      this.empresaService.create(this.empresa).subscribe(() => {
        this.empresaService.showMessage("Empresa cadastrada com sucesso!");
        this.router.navigate(['/']);
     })
    }
  }

  navigateToLogiIn(): void{
    this.router.navigate(['/']);
  }

}
