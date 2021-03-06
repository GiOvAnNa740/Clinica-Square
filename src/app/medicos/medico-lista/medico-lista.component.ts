import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Medico } from '../medico.model';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-medico-lista',
  templateUrl: './medico-lista.component.html',
  styleUrls: ['./medico-lista.component.css']
})
export class MedicoListaComponent implements OnInit, OnDestroy  {

  medicos:Medico[] = [];
  private medicosSubscription!: Subscription;


  constructor(public medicoService: MedicoService) { }

  ngOnDestroy(): void {
    this.medicosSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.medicoService.getMedicos();
    this.medicosSubscription = this.medicoService
      .getListaDeMedicosAtualizadaObservable()
      .subscribe((medicos: Medico[]) => {
        this.medicos = medicos;
      });
  }
}
