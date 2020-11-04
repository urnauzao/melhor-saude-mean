import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Clinica } from 'src/models/Clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  url: string = 'http://127.0.0.1:8000/clinicas';
  constructor(private http: HttpClient) { }

  getAll(){
    return  this.http.get<any>(this.url)
    .pipe(map(data =>
      data.map((clinica) => new Clinica(
        clinica._id,
        clinica.nome,
        clinica.url_imagem,
        clinica.url,
        clinica.whatsapp,
        clinica.descricao,
        clinica.local_resumido,
        clinica.logradouro,
        clinica.num_endereco,
        clinica.complemento,
        clinica.cep,
        clinica.cidade,
        clinica.bairro,
        clinica.estado,
        clinica.pais,
        clinica.medicos,
        ))
      ));
  }

}
