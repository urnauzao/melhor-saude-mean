import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMedicosComponent } from './list-medicos/list-medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListServicosComponent } from './list-servicos/list-servicos.component';
import { ListClinicasComponent } from './list-clinicas/list-clinicas.component';
import { ViewMedicoComponent } from './view-medico/view-medico.component';
import { CreateMedicoComponent } from './create-medico/create-medico.component';
import { EditMedicoComponent } from './edit-medico/edit-medico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {  MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import {  MatIconModule } from '@angular/material/icon';
import {  MatInputModule } from '@angular/material/input';
import {  MatListModule } from '@angular/material/list';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {  MatSelectModule } from '@angular/material/select';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatTableModule } from '@angular/material/table';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ListMedicosComponent,
    ListServicosComponent,
    ListClinicasComponent,
    ViewMedicoComponent,
    CreateMedicoComponent,
    EditMedicoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

