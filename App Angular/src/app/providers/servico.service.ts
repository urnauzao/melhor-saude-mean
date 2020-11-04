import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from 'src/models/Servico';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  url: string = "http://127.0.0.1:8000/servicos";
  constructor(private http: HttpClient) { }

  getAll(){
    return  this.http.get<any>(this.url)
    .pipe(map(data =>
      data.map((servico) => new Servico(
        servico._id,
        servico.nome,
        servico.descricao,
        servico.imagem,
        servico.clinicas,
        ))
      ));
  }


}