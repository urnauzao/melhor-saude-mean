import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MedicoService } from '../providers/medico.service';

@Component({
  selector: 'app-edit-medico',
  templateUrl: './edit-medico.component.html',
  styleUrls: ['./edit-medico.component.scss']
})
export class EditMedicoComponent implements OnInit {
  _id: string = '';
  medicoForm: FormGroup;
  nome: String = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: MedicoService, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.getMedico(this.route.snapshot.params['_id']);
    this.medicoForm = this.formBuilder.group({
      'nome' : [null, Validators.required]
    });
  }

  getMedico(_id) {
    this.api.getOne(_id).subscribe(data => {
      this._id = data._id;
      this.medicoForm.setValue({
        nome: data.nome
      });
    });
  }

  updateMedico(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateMedico(this._id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/medico-detalhe/' + this._id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}


