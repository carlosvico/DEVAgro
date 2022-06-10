import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazenda-delete',
  templateUrl: './fazenda-delete.component.html',
  styleUrls: ['./fazenda-delete.component.scss']
})
export class FazendaDeleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/fazenda'])
  }
}
