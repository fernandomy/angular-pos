import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'app-sale-item-list',
  templateUrl: './sale-item-list.component.html',
})
export class SaleItemListComponent implements OnInit {
  items$: Observable<any> = new Observable();
  filterName!: string;
  filterPriceMin!: number;
  filterPriceMax!: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectProducts);
  }
}
