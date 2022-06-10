import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazenda-update',
  templateUrl: './fazenda-update.component.html',
  styleUrls: ['./fazenda-update.component.scss']
})
export class FazendaUpdateComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/fazenda'])
  }
}
