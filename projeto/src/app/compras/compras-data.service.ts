import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Compras } from './compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasDataService {

  constructor() { }

  private comprasSource = new BehaviorSubject({ compras: null, key: ''});
  comprasAtual = this.comprasSource.asObservable();

  obtemCompras(compras: Compras, key: string){
    this.comprasSource.next({ compras: compras, key: key});
  }
}
