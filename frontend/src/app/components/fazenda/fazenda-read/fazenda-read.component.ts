<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Output } from '@angular/core';
>>>>>>> e02a383efc88347dba185bd1f67acfac40b4db70
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

<<<<<<< HEAD
  //@Output() headerTitle = 'Fazenda';

  fazendas: Fazenda[];
  graos: Grao[];
  juncao: [];
=======
  graos: Grao[]
  fazendas: Fazenda[]
  previsao: string[]
>>>>>>> e02a383efc88347dba185bd1f67acfac40b4db70

  constructor(private fazendaService: FazendaService, private graoService: GraoService) { }

  ngOnInit(): void {
<<<<<<< HEAD
=======

>>>>>>> e02a383efc88347dba185bd1f67acfac40b4db70
    this.graoService.read().subscribe(graos => {
      this.graos = graos;
    })
    this.fazendaService.read().subscribe(fazendas => {
      this.fazendas = fazendas;
      fazendas.forEach(fazenda => {
        this.graos.forEach(grao => {{
          if(fazenda.grao == grao.nome){
            fazenda.previsaoColheita = grao.previsao_colheita
          }
        }})
      })
    })
  }
}
