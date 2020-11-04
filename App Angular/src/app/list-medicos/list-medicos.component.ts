// import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/Medico';
import { MedicoService } from '../providers/medico.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list-medicos.component.html',
  styleUrls: ['./list-medicos.component.scss']
})
export class ListMedicosComponent implements OnInit {

  medicos: Observable<Medico[]>;
  displayedColumns: string[] = [ 'nome', 'especializacao', 'acao'];
  constructor(private medicoService : MedicoService) {}

  ngOnInit(){
    this.medicos = this.medicoService.getAll();
  }

}
