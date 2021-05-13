import { Component, OnInit } from '@angular/core';
import { Compras } from '../compras';
import { ComprasDataService } from '../compras-data.service';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  compras: Compras;
  key: string = "";

  constructor(private _comprasService: ComprasService,
              private _comprasDataService: ComprasDataService) { }

  ngOnInit(): void {
    this.compras = new Compras();
    this._comprasDataService.comprasAtual.subscribe(data =>{
      if (data.compras && data.key){
        this.compras = new Compras();
        this.compras.produto = data.compras.produto;
        this.compras.valor = data.compras.valor;
        this.compras.peso = data.compras.peso;
        this.compras.medida = data.compras.medida;
        this.key = data.key;
      }
    })
  }

  onSubmit(){
    if(this.key){
      this._comprasService.update(this.compras, this.key);
    }else{
      this._comprasService.insert(this.compras);
    }
    this.compras = new Compras();
    this.key = null;
  }
}
