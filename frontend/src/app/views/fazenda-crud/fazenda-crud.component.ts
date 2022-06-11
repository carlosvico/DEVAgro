import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazenda-crud',
  templateUrl: './fazenda-crud.component.html',
  styleUrls: ['./fazenda-crud.component.scss']
})
export class FazendaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFazendaCreate(): void{
    this.router.navigate(['/fazenda/create']);
  }
}
