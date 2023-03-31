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
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  addProduct(product: ProductModel) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  getProducts(): Observable<ProductModel[]> {
    const productRef = collection(this.firestore, 'products');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      ProductModel[]
    >;
  }

  deleteProduct(product: ProductModel) {
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocRef);
  }
}
