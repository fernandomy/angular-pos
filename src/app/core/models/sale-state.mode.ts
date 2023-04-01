import { SaleModel } from './sale.model';

export interface SaleStateModel {
  sales: SaleModel[];
  loading: boolean;
  error: any;
}
