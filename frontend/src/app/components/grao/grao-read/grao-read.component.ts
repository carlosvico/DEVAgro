import { Fazenda } from './../../fazenda/fazenda.model';
import { GraoService } from './../grao.service';
import { Grao } from './../grao.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-grao-read',
  templateUrl: './grao-read.component.html',
  styleUrls: ['./grao-read.component.scss']
})
export class GraoReadComponent implements OnInit {

  graos: Grao[]
  fazenda: Fazenda[]

  constructor(private router: Router, private gService: GraoService) { }

  ngOnInit(): void {
    this.gService.pegaGraos().subscribe(graos => {
      this.graos = graos
    })

  }

  navigateToGrainCrete(): void {
    this.router.navigate(['/grao/create'])
    // alert("Teste")
  }

  randomInteger = Math.floor(Math.random() * (5095 - 1 + 1)) + 1;

  getClass(){
    if(this.randomInteger % 2 == 0 ){

      return 'true'
    }else{
      return 'true'

    }
  }





}
