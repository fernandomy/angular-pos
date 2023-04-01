import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  DocumentReference,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SaleItemModel } from '../models/sale-item.model';
import { SaleModel } from '../models/sale.model';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(private firestore: Firestore) {}

  addSale(sale: SaleModel) {
    const saleRef = collection(this.firestore, 'sales');
    return addDoc(saleRef, sale);
  }

  // async createSale(sale: SaleModel, saleItems: SaleItemModel[]) {
  //   try {
  //     // Guardar la venta en Firestore
  //     const saleRef = await addDoc(collection(this.firestore, 'sales'), sale);
  //     const saleId = saleRef.id;

  //     // Asignar el id de venta a cada item de venta y guardarlos en Firestore
  //     const saleItemsWithId = saleItems.map((item) => ({ ...item, saleId }));
  //     await addDoc(collection(this.firestore, 'saleItems'), saleItemsWithId);

  //     return true;
  //   } catch (error) {
  //     console.error(error);
  //     return false;
  //   }
  // }

  async createSale(sale: SaleModel, saleItems: SaleItemModel[]) {
    try {
      // Guardar la venta en Firestore
      const saleRef = await addDoc(collection(this.firestore, 'sales'), sale);
      const saleId = saleRef.id;

      console.log(saleItems);
      // Asignar el id de venta a cada item de venta y guardarlos en Firestore
      const saleItemsWithId = saleItems.map((item) => ({ ...item, saleId }));
      const saleItemsCollection = collection(saleRef, 'saleItems');
      saleItemsWithId.forEach((item) => addDoc(saleItemsCollection, item));

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
