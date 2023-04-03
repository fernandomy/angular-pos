import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SaleItemModel } from 'src/app/core/models/sale-item.model';
import { SaleModel } from 'src/app/core/models/sale.model';
import { emptyCart } from 'src/app/store/actions/cart.actions';
import { saveSale } from 'src/app/store/actions/sale.actions';
import { selectCartItems } from 'src/app/store/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemsCart$: Observable<SaleItemModel[]> = new Observable();
  emptyCart!: number;
  total: number = 0;
  items!: SaleItemModel[];

  constructor(private store: Store, private toastr: ToastrService, public activeModal: NgbActiveModal) {
    this.itemsCart$ = store.select(selectCartItems);

    this.itemsCart$.subscribe((data) => {
      this.emptyCart = data.length;
      this.total = 0;
      this.items = data.map((item) => {
        this.total = this.total + item.quantity * item.price;
        return item;
      });
    });
  }

  onSaveSale() {
    const newSale: SaleModel = {
      date: new Date().getTime(),
      total: this.total,
      // items: this.items,
    };
    this.store.dispatch(saveSale({ sale: newSale, items: this.items }));
    this.store.dispatch(emptyCart());
    this.toastr.success('Venta realizada correctamente');
  }

  closeCartModal() {
    // this.modalActive.dismiss()
  }
}
