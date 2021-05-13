import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComprasDataService } from '../compras-data.service';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  compras: Observable<any>;

  constructor(private _comprasService: ComprasService,
              private _comprasDataService: ComprasDataService) { }

  ngOnInit(): void {
    this.compras = this._comprasDataService.getAll();
  }

delete(key: string){
  this._comprasService.delete(key);
}

edit(compras: Compras, key: string){
  this._comprasDataService.obtemCompras(compras, key);
}

}
