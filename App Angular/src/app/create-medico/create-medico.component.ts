import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MedicoService } from '../providers/medico.service';

@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.scss']
})
export class CreateMedicoComponent implements OnInit {

  // constructor() { }
  medicoForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: MedicoService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.medicoForm = this.formBuilder.group({
      // 'nome_medico' : [null, Validators.required],
      // 'desc_medico' : [null, [Validators.required, Validators.minLength(4)]],
      // 'preco_medico' : [null, Validators.required]
      // '_id_medico' : [null, Validators.required],
      'nome' : [null, Validators.required],
      'idade' : [null, Validators.required],
      'especializacao' : [null, Validators.required],
      'preco_consulta' : [null, Validators.required],
      'telefone' : [null, Validators.required],
      'email' : [null, Validators.required],
      'whatsapp' : [null, Validators.required],
      'foto' : [null, Validators.required],
    })  
  }

  addMedico(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addMedico(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/medico-detalhes', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
