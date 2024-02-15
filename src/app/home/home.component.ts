import { Component, OnInit } from '@angular/core';
import { AlertService } from '../servicios/alert.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor(private alerta:AlertService){

}
enviarMensaje(mensaje:string){
  this.alerta.mostrarMensaje(mensaje);
}       
ngOnInit(){
  this.enviarMensaje("ngOnInit de HomeComponent");
}
}
