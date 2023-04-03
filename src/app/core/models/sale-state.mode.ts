import { SaleItemModel } from './sale-item.model';
import { SaleModel } from './sale.model';

export interface SaleStateModel {
  sales: SaleModel[];
  saleActive: SaleModel;
  saleItemsActive: SaleItemModel[];
  loading: boolean;
  error: any;
}
