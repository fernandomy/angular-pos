import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
} from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { ProductI } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  addProduct(product: ProductI) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  getProducts(): Observable<ProductI[]> {
    const productRef = collection(this.firestore, 'products');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      ProductI[]
    >;
  }

  deleteProduct(id: string) {
    const productDocRef = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDocRef);
  }
}
