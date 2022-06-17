import { Component, OnInit } from '@angular/core';
import { Grao } from '../../grao/grao.model';
import { GraoService } from '../../grao/grao.service';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-read',
  templateUrl: './fazenda-read.component.html',
  styleUrls: ['./fazenda-read.component.scss',]
})
export class FazendaReadComponent implements OnInit {

  graos: Grao[]
  fazendas: Fazenda[]
  previsao: string[]

  constructor(private fazendaService: FazendaService, private graoService: GraoService) { }

  ngOnInit(): void {
    this.graoService.read().subscribe(graos => {
      this.graos = graos;
    })
    this.fazendaService.read().subscribe(fazendas => {
      this.fazendas = fazendas;
      fazendas.forEach(fazenda => {
        if(this.graos.find(grao => grao.nome == fazenda.grao)){
          fazenda.previsaoColheita == this.graos.find(grao => grao.nome == fazenda.grao).previsao_colheita
          //console.log(this.graos.find(grao => grao.nome == fazenda.grao))
        }
      })
    })
  }

}
