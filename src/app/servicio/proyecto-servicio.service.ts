import { Injectable } from '@angular/core';
import { Proyecto } from '../clases/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServicioService {
  public proyecto: Proyecto;

  public arrayProyecto: Proyecto[] = [];

  constructor() { 
    this.proyecto = new Proyecto();
  }
  crearProyecto (p:Proyecto){
    this.proyecto = p;
    this.arrayProyecto.push(p);
  }
  obtenerProyecto (): Proyecto{
    return this.proyecto;
  }
  obtenerListaProyectos(): Proyecto[]{
    return this.arrayProyecto;
  }
}
