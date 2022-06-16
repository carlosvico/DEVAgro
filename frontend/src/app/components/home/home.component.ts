import { Funcionario } from './../funcionario/funcionario.model';
import { FuncionarioService } from './../funcionario/funcionario.service';
import { Component } from '@angular/core';
import { Fazenda } from '../fazenda/fazenda.model';
import { FazendaService } from '../fazenda/fazenda.service';
import { HomeService } from './home.service';
import { WeatherData } from './weatherModel/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor( private fazendaService: FazendaService, 
    private funcionarioService: FuncionarioService, private weatherService: HomeService) {}

  fazendas: Fazenda[];
  funcionarios: Funcionario[];
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.fazendaService.read().subscribe(fazendas => {
      this.fazendas = fazendas;
    })

    this.funcionarioService.read().subscribe(funcionario => {
      this.funcionarios = funcionario;
    })

    this.weatherService.getWeatherData('sao paulo')
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}