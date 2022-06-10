import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazenda-read',
  templateUrl: './fazenda-read.component.html',
  styleUrls: ['./fazenda-read.component.scss']
})
export class FazendaReadComponent implements OnInit {

  //fazendas: Fazenda[]
  displayedColumns = ['name', 'grao', 'dataUltimaColheita']

  constructor() { }

  ngOnInit(): void {
  }

}
