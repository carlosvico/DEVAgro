import { Component, OnInit } from '@angular/core';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-read',
  templateUrl: './fazenda-read.component.html',
  styleUrls: ['./fazenda-read.component.scss',]
})
export class FazendaReadComponent implements OnInit {

  fazendas: Fazenda[]
  displayedColumns = ['id', 'name', 'ultimaColheita', 'action']

  constructor(private fazendaService: FazendaService) { }

  ngOnInit(): void {
    this.fazendaService.read().subscribe(fazendas => {
      this.fazendas = fazendas;
    })
  }

}
