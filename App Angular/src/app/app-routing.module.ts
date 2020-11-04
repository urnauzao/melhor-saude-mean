import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClinicasComponent } from './list-clinicas/list-clinicas.component';
import { ListMedicosComponent } from './list-medicos/list-medicos.component';
import { ListServicosComponent } from './list-servicos/list-servicos.component';
import { ViewMedicoComponent } from './view-medico/view-medico.component';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { EditMedicoComponent } from './edit-medico/edit-medico.component';


const routes: Routes = [
  // { path: '', component: ListMedicosComponent },
  { path: 'medico-datalhe/:_id', component: ViewMedicoComponent },
  { path: 'medico-novo', component: CreateMedicoComponent },
  { path: 'medico-editar/:_id', component: EditMedicoComponent },
  { path: 'medicos', component: ListMedicosComponent },
  { path: 'clinicas', component: ListClinicasComponent },
  { path: 'servicos', component: ListServicosComponent }
  // { path: '', redirectTo: '/medicos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
