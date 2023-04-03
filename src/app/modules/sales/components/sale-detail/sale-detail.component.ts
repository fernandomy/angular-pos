import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectLoading,
  selectSaleItemsActive,
} from 'src/app/store/selectors/sale.selectors';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css'],
})
export class SaleDetailComponent implements OnInit {
  saleItems$: Observable<any> = new Observable();
  loading$: Observable<any> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.saleItems$ = this.store.select(selectSaleItemsActive);
    this.loading$ = this.store.select(selectLoading);
  }
}
