import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { Fazenda } from '../../fazenda/fazenda.model';
import { FazendaService } from '../../fazenda/fazenda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.scss']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario: Funcionario;
  fazendas: Fazenda [];
  oldFarm: Fazenda;
  constructor(private funcionarioService: FuncionarioService, private fazendaService: FazendaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readById(id).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
    this.fazendaService.read().subscribe(fazendas => {
      this.oldFarm = fazendas.find(f => f.name === this.funcionario.fazenda)
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

  changeFarm(){
    this.funcionario.fazenda = document.querySelector('select').value;
  }

  updateFuncionario(): void {

    if((this.funcionario.nome != '' && this.funcionario.cargo != '' && this.funcionario.fazenda != '')){
      if(this.oldFarm.name != this.funcionario.fazenda){
        this.funcionario.update = new Date(Date.now()).toLocaleDateString();
      }

      this.funcionarioService.update(this.funcionario).subscribe(() => {
        this.funcionarioService.showMessage('Funcionario Alterado com Sucesso!');
        this.router.navigate(["/funcionario"]);
      })
    }else{
      this.funcionarioService.showMessage('ERRO: Verifique se todos os campos estão preenchidos!', true);
    }


  }

  cancel(): void {
    this.router.navigate(['/funcionario'])
  }
}
