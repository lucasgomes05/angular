import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Compras } from './compras';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private _angularFireDatabase: AngularFireDatabase) { }

  insert(compras: Compras) {
    this._angularFireDatabase.list("compras").push(compras)
    .then((result: any) => {
      console.log(result.key);
    })
  }

  update(compras: Compras, key: string){
    this._angularFireDatabase.list("compras").update(key, compras);
  }

  getAll(){
    return this._angularFireDatabase.list("compras")
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(data => ({ key: data.payload.key, ...data.payload.val()}));
      })
    )
  }

  delete(key: string){
    this._angularFireDatabase.object('compras/${key}').remove();
  }

}
