import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Funcionario } from './funcionario.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = "http://localhost:3001/funcionarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.baseUrl, funcionario).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por inserir, no backend, uma nova funcionario

  read(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por ler a listagem de funcionarios do backend

  readById(id: number): Observable<Funcionario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Funcionario>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por ler a funcionario pelo id

  update(funcionarios: Funcionario): Observable<Funcionario> {
    const url = `${this.baseUrl}/${funcionarios.id}`
    return this.http.put<Funcionario>(url, funcionarios).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  } //Função responsável por atualizar, no backend, uma funcionario

  delete(id: number): Observable<Funcionario> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Funcionario>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //Deletar uma funcionario
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
