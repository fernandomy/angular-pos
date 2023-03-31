import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CarItemModel } from 'src/app/core/models/cart-item.model';
import { selectCartItems } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemsCart$: Observable<CarItemModel[]> = new Observable();
  emptyCart!: number;
  total: number = 0;

  constructor(private store: Store) {
    this.itemsCart$ = store.select(selectCartItems);

    this.itemsCart$.subscribe((data) => {
      this.emptyCart = data.length;
      this.total = 0;
      data.map((item) => {
        this.total = this.total + item.quantity * item.price;
      });
    });
  }
}
