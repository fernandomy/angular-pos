import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, take } from 'rxjs/operators';
import { SaleService } from 'src/app/modules/sales/services/sale.service';
import {
  deletedSale,
  deleteSale,
  savedSale,
  saveItemFailure,
  saveSale,
} from '../actions/sale.actions';

@Injectable()
export class SaleEffects {
  addSale$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveSale),
      exhaustMap(({ sale, items }) =>
        this.saleService
          .createSale(sale, items)
          .then(() => savedSale({ sale, items }))
          .catch((error) => saveItemFailure({ error }))
      )
    )
  );

  loadSales$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Sale history] Load sales'),
      exhaustMap(() =>
        this.saleService.getSales().pipe(
          map((sales) => ({
            type: '[Sale history] Loaded sales',
            sales,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // loadSalesItems$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[Sale list] Load sale items'),
  //     exhaustMap(({ sale }) =>
  //       this.saleService.getSaleItems(sale).pipe(
  //         map((saleItems) => ({
  //           type: '[Sale list] Loaded sale items',
  //           saleItems,
  //         })),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
  loadSalesItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Sale list] Load sale items'),
      exhaustMap(({ sale }) =>
        this.saleService.getSaleItems(sale).pipe(
          take(1), // Añadido el operador `take(1)`
          map((saleItems) => ({
            type: '[Sale list] Loaded sale items',
            saleItems,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  deleteSale$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSale),
      exhaustMap(({ sale }) =>
        this.saleService
          .deleteSale(sale)
          .then(() => deletedSale({ sale }))
          .catch((error) => saveItemFailure({ error }))
      )
    )
  );

  constructor(private actions$: Actions, private saleService: SaleService) { }
}
