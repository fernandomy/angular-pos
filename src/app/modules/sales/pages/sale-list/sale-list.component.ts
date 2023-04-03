import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SaleModel } from 'src/app/core/models/sale.model';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import {
  deleteSale,
  loadSaleItems,
  loadSales,
} from 'src/app/store/actions/sale.actions';
import {
  selectSaleItemsActive,
  selectSales,
} from 'src/app/store/selectors/sale.selectors';
import { SaleDetailComponent } from '../../components/sale-detail/sale-detail.component';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css'],
})
export class SaleListComponent {
  sales$: Observable<any> = new Observable();

  constructor(
    private store: Store,
    private confirmService: ConfirmService,
    private modalService: ModalService
  ) {
    store.dispatch(loadSales());
    //     this.sales$ = store.select(selectSales);
  }

  ngOnInit(): void {
    this.sales$ = this.store.select(selectSales);
  }

  viewSaleDetail() {}

  async onDeleteSale(sale: SaleModel) {
    const result = await this.confirmService.open(
      'Eliminar venta',
      '¿Esta seguro de eliminar esta venta?'
    );
    if (result) this.store.dispatch(deleteSale({ sale }));
  }

  onLoadSaleItems(sale: SaleModel) {
    this.store.dispatch(loadSaleItems({ sale }));
    this.modalService.open(SaleDetailComponent);
  }
}
