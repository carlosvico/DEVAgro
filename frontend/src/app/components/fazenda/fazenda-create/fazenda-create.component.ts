import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fazenda-create',
  templateUrl: './fazenda-create.component.html',
  styleUrls: ['./fazenda-create.component.scss']
})
export class FazendaCreateComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/fazenda'])
  }
}
