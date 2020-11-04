import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from '../providers/medico.service';
import { Medico } from '../../models/Medico';

@Component({
  selector: 'app-view-medico',
  templateUrl: './view-medico.component.html',
  styleUrls: ['./view-medico.component.scss']
})

export class ViewMedicoComponent implements OnInit {
  medico: Medico = { 
    "_id": '',
    "nome": '',
    "idade": null,
    "especializacao": '',
    "preco_consulta": null,
    "telefone": '',
    "email": '',
    "whatsapp": null,
    "foto": '',
   };

  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: MedicoService) { }

  ngOnInit() {
    this.getMedico(this.route.snapshot.params['_id']);
  }

  getMedico(_id) {
    this.api.getOne(_id)
      .subscribe(data => {
        this.medico = data;
        console.log(this.medico);
        this.isLoadingResults = false;
      });
  }

  
  deleteMedico(id) {
    this.isLoadingResults = true;
    this.api.deleteMedico(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/medicos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}






  
  
