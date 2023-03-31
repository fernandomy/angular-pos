import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Sale Page] Load products'),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ({
            type: '[List Product Sale] Loaded products',
            products,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
