import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Empresa } from './empresa.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseUrl = "http://localhost:3001/empresas/"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }


  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

}
