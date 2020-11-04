import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinica } from 'src/models/Clinica';
import { ClinicaService } from '../providers/clinica.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-clinicas.component.html',
  styleUrls: ['./list-clinicas.component.scss']
})
export class ListClinicasComponent implements OnInit {
  clinicas: Observable<Clinica[]>;
  constructor(private clinicaService : ClinicaService) {}

  ngOnInit(){
    this.clinicas = this.clinicaService.getAll();
  }

}

