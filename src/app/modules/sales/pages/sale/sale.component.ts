import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }
}
