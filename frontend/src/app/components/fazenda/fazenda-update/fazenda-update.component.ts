import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fazenda } from '../fazenda.model';
import { FazendaService } from '../fazenda.service';

@Component({
  selector: 'app-fazenda-update',
  templateUrl: './fazenda-update.component.html',
  styleUrls: ['./fazenda-update.component.scss']
})
export class FazendaUpdateComponent implements OnInit {

  fazenda: Fazenda;

  constructor(private fazendaService: FazendaService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fazendaService.readById(id).subscribe(fazenda => {
      this.fazenda = fazenda;
    });
  }

  updateFazenda(): void {
    if((this.fazenda.name != '' && this.fazenda.endereco != '' && this.fazenda.grao != '' && this.fazenda.ultimaColheita != '')){
      this.fazendaService.update(this.fazenda).subscribe(() => {
        this.fazendaService.showMessage('Fazenda Alterada com Sucesso!');
        this.router.navigate(["/fazenda"]);
      });
    }else{
      this.fazendaService.showMessage('ERRO: Verifique se todos os campos estão preenchidos!', true);
    }
  }

  cancel(): void {
    this.router.navigate(['/fazenda']);
  }
}
