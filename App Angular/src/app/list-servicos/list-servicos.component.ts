import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/models/Servico';
import { ServicoService } from '../providers/servico.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-servicos.component.html',
  styleUrls: ['./list-servicos.component.scss']
})
export class ListServicosComponent implements OnInit {
  servicos: Observable<Servico[]>;
  constructor(private servicoService : ServicoService) {}

  ngOnInit(){
    this.servicos = this.servicoService.getAll();
  }
}