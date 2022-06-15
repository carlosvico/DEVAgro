import { Router } from '@angular/router';
import { Grao } from './../grao.model';
import { GraoService } from './../grao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grao-create',
  templateUrl: './grao-create.component.html',
  styleUrls: ['./grao-create.component.scss']
})
export class GraoCreateComponent implements OnInit {

  fazendas: any;
  graos: Grao = {
    nome: '',
    previsaoColheita: '',
    informacoes: '',
    fazenda: ''

  }


  constructor(private sGrao: GraoService, private router: Router) { }

  ngOnInit(): void {
   
  }
  cancel(): void {
  }


  validatorInputs(): boolean {
    if (this.graos.nome.trim() === '' || this.graos.previsaoColheita.trim() === '' || this.graos.informacoes.trim() === '' || this.graos.fazenda.trim() === '') {
      if (this.graos.nome.trim() === '') {
        document.getElementById('nome').classList.add('obrigatory');
      } else {
        document.getElementById('nome').classList.remove('obrigatory');
      }

      if (this.graos.previsaoColheita.trim() === '') {
        document.getElementById('previsaoColheita').classList.add('obrigatory');
      } else {
        document.getElementById('previsaoColheita').classList.remove('obrigatory');
      }

      if (this.graos.informacoes.trim() === '') {
        document.getElementById('informacoes').classList.add('obrigatory');
      } else {
        document.getElementById('informacoes').classList.remove('obrigatory');
      }

      if (this.graos.fazenda.trim() === '') {
        document.getElementById('fazenda').classList.add('obrigatory');
      } else {
        document.getElementById('fazenda').classList.remove('obrigatory');
      }

      return false;
    } else {
      return true;
    }
  }

  createGrain(): void {
    if (this.validatorInputs() == true) {
      this.sGrao.create(this.graos).subscribe(() => {
        this.sGrao.showMessage('Grão Criado!');
        this.router.navigate(['/grao']);
      });
    } else {
      this.sGrao.showMessage('ERRO: Verifique se todos os campos estão preenchidos!', true);
    }


    // Popula dropdown de fazendas no grao-create
   

  }
}