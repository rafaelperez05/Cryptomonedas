import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapturaService {

  baseUrl: string = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=';
  base2Url: string = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';

  constructor(private http: HttpClient) { }

  obtenerDato(moneda: string){
    const url = `${this.baseUrl}${moneda}`
    return this.http.get(url);
  }

  obtenerDato2(moneda: string, crytomoneda: string){
    const url2 = `${this.base2Url}${crytomoneda}&tsyms=${moneda}`
    return this.http.get(url2);
  }
}