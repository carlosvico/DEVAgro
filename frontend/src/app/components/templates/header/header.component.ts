import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Variaveis para exebir o titulo e o nome da empresa no html, valores estao ficticios.
  @Input() title:string= "Inicio"  
  @Input() nomeEmpresa:string="Rafael"

  constructor() { }

  ngOnInit(): void {
  }

}
