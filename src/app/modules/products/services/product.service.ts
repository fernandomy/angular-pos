import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  docData,
  query,
  orderBy,
  limit,
} from '@angular/fire/firestore';
import { deleteDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) { }

  addProduct(product: ProductModel) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  getProducts(): Observable<ProductModel[]> {
    const productRef = collection(this.firestore, 'products',);
    const q = query(productRef, orderBy("name"));
    return collectionData(q, { idField: 'id' }) as Observable<
      ProductModel[]
    >;
  }

  getProductById(id: string) {
    const productDocRef = doc(this.firestore, `products/${id}`);
    return docData(productDocRef, { idField: 'id' }) as Observable<ProductModel>;
  }

  updateProduct(id: string, data: any) {
    const productDocRef = doc(this.firestore, `products/${id}`);
    return updateDoc(productDocRef, data);
  }

  deleteProduct(product: ProductModel) {
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocRef);
  }
}
