import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Fazenda } from './fazenda.model';

@Injectable({
  providedIn: 'root'
})
export class FazendaService {

  baseUrl = "http://localhost:3001/fazenda"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(fazenda: Fazenda): Observable<Fazenda> {
    return this.http.post<Fazenda>(this.baseUrl, fazenda).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por inserir, no backend, uma nova fazenda

  read(): Observable<Fazenda[]>{
    return this.http.get<Fazenda[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  } //Função responsável por ler a listagem de fazendas do backend

  readById(id: number): Observable<Fazenda> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fazenda>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por ler a fazenda pelo id

  update(fazenda: Fazenda): Observable<Fazenda> {
    const url = `${this.baseUrl}/${fazenda.id}`
    return this.http.put<Fazenda>(url, fazenda).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por atualizar, no backend, uma fazenda

  delete(id: number): Observable<Fazenda> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Fazenda>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Deletar uma fazenda
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
