import { Component } from '@angular/core';
import { Fazenda } from '../fazenda/fazenda.model';
import { FazendaService } from '../fazenda/fazenda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor( private fazendaService: FazendaService) {}

  fazendas: Fazenda[]

  ngOnInit(): void {
    this.fazendaService.read().subscribe(fazendas => {
      this.fazendas = fazendas;
    })
  }
}
