import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/shared/services/modal.service';
import { loadProducts } from 'src/app/store/actions/products.actions';
import { CartComponent } from '../../components/cart/cart.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  constructor(private store: Store, private modelService: ModalService) { }
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  openCart() {
    this.modelService.open(CartComponent)
  }
}
