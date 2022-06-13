import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-create',
  templateUrl: './fazenda-create.component.html',
  styleUrls: ['./fazenda-create.component.scss']
})
export class FazendaCreateComponent implements OnInit {

  fazenda: Fazenda = {
    name: '',
    endereco: '',
    grao: '',
    ultimaColheita: ''
  }

  constructor(private fazendaService: FazendaService, private router: Router) {}

  ngOnInit(): void {}

  createFazenda(): void {
    if((this.fazenda.name != '' && this.fazenda.endereco != '' && this.fazenda.grao != '' && this.fazenda.ultimaColheita != '')){
      this.fazendaService.create(this.fazenda).subscribe(() => {
        this.fazendaService.showMessage('Fazenda Criado!');
        this.router.navigate(['/fazenda']);
      });
    }else{
      this.fazendaService.showMessage('ERRO: Verifique se todos os campos estão preenchidos!', true);
    }
  }

  cancel(): void {
    this.router.navigate(['/fazenda'])
  }
}
