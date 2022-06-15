import { Fazenda } from './../fazenda/fazenda.model';

import { Grao } from './grao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraoService {

  url_Grao = "http://localhost:3001/graos"
  url_fazenda = "http://localhost:3001/fazendas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  pegaGraos(): Observable<Grao[]>{
    return this.http.get<Grao[]>(this.url_Grao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por ler a listagem de fazendas do backend

  readById(id: number): Observable<Grao> {
    const url = `${this.url_Grao}/${id}`
    return this.http.get<Grao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por ler a fazenda pelo id

  update(grao: Grao): Observable<Grao> {
    const url = `${this.url_Grao}/${grao.id}`
    return this.http.put<Grao>(url, grao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por atualizar, no backend, uma fazenda

  delete(id: number): Observable<Grao> {
    const url = `${this.url_Grao}/${id}`
    return this.http.delete<Grao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Deletar uma fazenda
  }


  create(grao: Grao): Observable<Grao> {
    return this.http.post<Grao>(this.url_Grao, grao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
    }

    // Preenche o dropdown em grao-create
    pegaFazendas(): Observable<Fazenda[]>{
      return this.http.get<Fazenda[]>(this.url_fazenda).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
    }

    showMessage(msg: string, isError: boolean = false): void{
      this.snackBar.open(msg, 'X', {
        duration: 2000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
    }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
