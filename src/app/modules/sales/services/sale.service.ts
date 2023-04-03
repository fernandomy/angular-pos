import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { map, Observable, of, tap } from 'rxjs';
import { SaleItemModel } from '../../../core/models/sale-item.model';
import { SaleModel } from '../../../core/models/sale.model';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(private firestore: Firestore) { }

  addSale(sale: SaleModel) {
    const saleRef = collection(this.firestore, 'sales');
    return addDoc(saleRef, sale);
  }

  async createSale(sale: SaleModel, saleItems: SaleItemModel[]) {
    try {
      // Guardar la venta en Firestore
      const saleRef = await addDoc(collection(this.firestore, 'sales'), sale);
      const saleId = saleRef.id;

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

  getSales(): Observable<any> {
    const salestRef = collection(this.firestore, 'sales');
    return collectionData(salestRef, { idField: 'id' }) as Observable<any[]>;
  }

  getSaleItems(sale: SaleModel): Observable<any> {
    const saleItemstRef = collection(
      this.firestore,
      `sales/${sale.id}/saleItems`
    );
    return collectionData(saleItemstRef, { idField: 'id' }) as Observable<
      any[]
    >;
  }

  deleteSale(sale: SaleModel) {
    const saleDocRef = doc(this.firestore, `sales/${sale.id}`);
    return deleteDoc(saleDocRef);
  }

  async getSalesWithItems(): Promise<Observable<SaleModel[]>> {
    try {
      const salesQuery = query(collection(this.firestore, 'sales'));
      const salesSnapshot = await getDocs(salesQuery);

      const sales: SaleModel[] = [];
      for (const saleDoc of salesSnapshot.docs) {
        const saleData = saleDoc.data() as SaleModel;
        const saleId = saleDoc.id;

        // Obtener los items de venta para esta venta
        const saleItemsQuery = query(
          collection(this.firestore, 'sales', saleId, 'saleItems')
        );
        const saleItemsSnapshot = await getDocs(saleItemsQuery);
        const saleItems: SaleItemModel[] = saleItemsSnapshot.docs.map(
          (itemDoc) => itemDoc.data() as SaleItemModel
        );

        sales.push({ ...saleData, id: saleId, saleItems });
      }

      return of(sales);
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener las ventas con items');
    }
  }
}
