import { Component } from '@angular/core';
import { CapturaService } from 'src/app/servicio/captura.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  optSelect: string = '0';
  optSelectC: string = '0';
  arrData: any = [];
  resultado: any = '';
  resul: any = '';
  
  
  monedas = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' }
  ];

constructor (private captura: CapturaService){
 
}

capturar1(){
    console.log(this.optSelect);
    this.captura.obtenerDato(this.optSelect).subscribe(
      (datos:any) => {
        this.arrData = datos.Data;
        console.log(this.arrData);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
      
    )
  }

capturar2(){
  console.log(this.optSelectC);
  this.captura.obtenerDato2(this.optSelect, this.optSelectC).subscribe(
    (datos:any) => {

      this.resultado = datos.DISPLAY[this.optSelectC][this.optSelect];

      console.log(datos.DISPLAY[this.optSelectC][this.optSelect]);
    }
  )

  }

  cotizar(){
    this.resul = this.resultado;
  }
  
}
