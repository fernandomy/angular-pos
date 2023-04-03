import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CategoryI } from '../../modules/categories/models/cateogory.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private firestore: Firestore) { }

  addCategory(category: CategoryI) {
    const categoryRef = collection(this.firestore, 'categories');
    return addDoc(categoryRef, category);
  }

  getCategories(): Observable<CategoryI[]> {
    const categoryRef = collection(this.firestore, 'categories');
    return collectionData(categoryRef, { idField: 'id' }) as Observable<
      CategoryI[]
    >;
  }

  getCategory(id: string) {
    const categoryDocRef = doc(this.firestore, `categories/${id}`);
    return docData(categoryDocRef, { idField: 'id' }) as Observable<CategoryI>;
  }

  deleteCategory(category: CategoryI) {
    const categoryDocRef = doc(this.firestore, `categories/${category.id}`);
    return deleteDoc(categoryDocRef);
  }

  updateCategory(id: string, data: any) {
    const categoryDocRef = doc(this.firestore, `categories/${id}`);
    return updateDoc(categoryDocRef, data);
  }
}
