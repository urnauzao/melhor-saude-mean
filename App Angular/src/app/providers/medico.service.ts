import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Medico } from './../../models/Medico';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  url: string = 'http://127.0.0.1:8000/medico';
  constructor(private http: HttpClient) { }

  getAll(){
    return  this.http.get<any>(`${this.url}s`)
    .pipe(map(data =>
      data.map((medico) => new Medico(
        medico._id,
        medico.nome,
        medico.idade,
        medico.especializacao,
        medico.preco_consulta,
        medico.telefone,
        medico.email,
        medico.whatsapp,
        medico.foto,
        ))
      ));
  }

  // getOne(_id: string){
  //   return  this.http.get<Medico>(`${this.url}/${_id}`)
  //   .pipe(
  //     tap(_ => console.log(`leu o médico id=${_id}`)),
  //     catchError(this.handleError<Medico>(`getMedico id=${_id}`))
  //   );
  // }
  getOne(_id: string): Observable<Medico> {
    const url = `${this.url}/${_id}`;
    return this.http.get<Medico>(url).pipe(
      tap(_ => console.log(`leu o Medico id=${_id}`)),
      catchError(this.handleError<Medico>(`getMedico id=${_id}`))
    );
  }

  addMedico(medico){
    return this.http.post<Medico>(this.url, medico, httpOptions).pipe(
      tap((medico: Medico) => console.log(`adicionou o médico com w/ id=${medico._id}`)),
      catchError(this.handleError<Medico>('addMedico'))
    );
  }

  updateMedico(_id: string, medico){
    return this.http.put(`${this.url}/${_id}`, medico, httpOptions).pipe(
      tap(_ => console.log(`Atualiza o medico com id=${_id}`)),
      catchError(this.handleError<any>('updateMedico'))
    );
  }

  deleteMedico (_id: string){
    return this.http.delete<Medico>(`${this.url}/${_id}`, httpOptions).pipe(
      tap(_ => console.log(`remove o Medico com id=${_id}`)),
      catchError(this.handleError<Medico>('deleteMedico'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
