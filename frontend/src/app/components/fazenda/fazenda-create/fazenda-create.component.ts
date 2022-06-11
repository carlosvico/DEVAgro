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
    grao: '',
    ultimaColheita: '',
    endereco: ''
  }

  constructor(private fazendaService: FazendaService, private router: Router) {}

  ngOnInit(): void {}

  createFazenda(): void {
    this.fazendaService.create(this.fazenda).subscribe(() => {
      this.fazendaService.showMessage('Fazenda Criada!');
      this.router.navigate(['/fazenda']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fazenda'])
  }
}
