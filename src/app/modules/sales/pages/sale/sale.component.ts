import { Component, OnInit } from '@angular/core';
import { StateObservable, Store } from '@ngrx/store';
import { ModalService } from 'src/app/shared/services/modal.service';
import { loadProducts } from 'src/app/store/actions/products.actions';
import { CartComponent } from '../../components/cart/cart.component';
import { Observable } from 'rxjs';
import { SaleItemModel } from 'src/app/core/models/sale-item.model';
import { selectCartItems } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  itemsCart$: Observable<SaleItemModel[]> = new Observable();
  total: number = 0

  constructor(private store: Store, private modelService: ModalService) { }

  ngOnInit(): void {
    // Load products
    this.store.dispatch(loadProducts());
    // Total items
    this.itemsCart$ = this.store.select(selectCartItems);

    this.itemsCart$.subscribe((data) => {
      this.total = 0;
      data.map((item) => {
        this.total = this.total + item.quantity;
        return item;
      });
    });
  }

  openCart() {
    this.modelService.open(CartComponent)
  }
}
