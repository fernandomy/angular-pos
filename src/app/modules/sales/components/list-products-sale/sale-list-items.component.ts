import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'app-sale-list-items',
  templateUrl: './sale-list-items.component.html',
  styles: [`
  .card-items {
    height: calc(100vh - 220px);
    overflow: auto;}
  `]
})
export class SaleItemListComponent implements OnInit {
  // todo -> cambiar tipo para que no agrege otros campos
  items$: Observable<any> = new Observable();
  filterName!: string;
  filterPriceMin!: number;
  filterPriceMax!: number;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectProducts);
  }
}
