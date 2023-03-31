import { ProductModel } from './product.model';

export interface ProductsStateModel {
  products: ProductModel[];
  loading: boolean;
}
