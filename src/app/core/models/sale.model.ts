import { SaleItemModel } from './sale-item.model';

export interface SaleModel {
  id?: string;
  date: number;
  total: number;
  saleItems?: SaleItemModel[];
  //   employee: string;
  //   customer: string;
}
