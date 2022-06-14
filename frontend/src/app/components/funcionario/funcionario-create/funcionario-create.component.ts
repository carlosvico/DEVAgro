import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FazendaService } from '../../fazenda/fazenda.service';
import { Fazenda } from '../../fazenda/fazenda.model';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.scss']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    fazenda: '',
    data: '',
    update: '',
    cpf: '',
    telefone: '',
    cargo:'',
    ativo: false
  }

  fazendas: Fazenda [];

  constructor(private funcionarioService: FuncionarioService, private fazendaService: FazendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fazendaService.read().subscribe(fazendas => {
      this.fazendas = fazendas;
    });
  }

  isActive(event): void {
    if(event.target.checked){
      this.funcionario.ativo = true;
    }else{
      this.funcionario.ativo = false;
    }
  }

  teste(){
    document.querySelector('')
  }

  changeFarm(){
    this.funcionario.fazenda = document.querySelector('select').value;
  }

  createFuncionario(): void {
    if((this.funcionario.nome != '' && this.funcionario.cpf != '' && this.funcionario.telefone != '' && this.funcionario.cargo != '' && this.funcionario.fazenda != '')){
      this.funcionario.data =  new Date(Date.now()).toLocaleDateString();
      this.funcionario.update = this.funcionario.data;
      this.funcionarioService.create(this.funcionario).subscribe(() => {
        this.funcionarioService.showMessage('Funcionario Criado!');
        this.router.navigate(['/funcionario']);
      });
    }else{
      this.funcionarioService.showMessage('ERRO: Verifique se todos os campos estão preenchidos!', true);
    }
  }

  cancel(): void {
    this.router.navigate(['/funcionario'])
  }
}
