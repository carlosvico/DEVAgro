import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.scss']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: any = [
    {
      id: 1,
      nome: 'Ramon Santos',
      data: '11/02/2022',
      fazenda: 'Estância das vivências',
      dataFazenda: '04/05/2022',
      funcao: 'Colheita',
      ativo: 'não'
    },
    {
      id: 2,
      nome: 'Cláudia Santos',
      data: '20/02/2022',
      fazenda: 'Arrozeira do futuro',
      dataFazenda: '03/03/2022',
      funcao: 'Plantação',
      ativo: 'sim'
    },
    {
      id: 2,
      nome: 'Cláudia Santos',
      data: '20/02/2022',
      fazenda: 'Arrozeira do futuro',
      dataFazenda: '03/03/2022',
      funcao: 'Plantação',
      ativo: 'sim'
    },
    {
      id: 2,
      nome: 'Cláudia Santos',
      data: '20/02/2022',
      fazenda: 'Arrozeira do futuro',
      dataFazenda: '03/03/2022',
      funcao: 'Plantação',
      ativo: 'sim'
    },
    {
      id: 2,
      nome: 'Cláudia Santos',
      data: '20/02/2022',
      fazenda: 'Arrozeira do futuro',
      dataFazenda: '03/03/2022',
      funcao: 'Plantação',
      ativo: 'sim'
    },
    {
      id: 2,
      nome: 'Cláudia Santos',
      data: '20/02/2022',
      fazenda: 'Arrozeira do futuro',
      dataFazenda: '03/03/2022',
      funcao: 'Plantação',
      ativo: 'sim'
    },
    {
      id: 2,
      nome: 'Cláudia Santos',
      data: '20/02/2022',
      fazenda: 'Arrozeira do futuro',
      dataFazenda: '03/03/2022',
      funcao: 'Plantação',
      ativo: 'sim'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
