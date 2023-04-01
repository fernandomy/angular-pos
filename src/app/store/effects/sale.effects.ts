import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { SaleService } from 'src/app/core/services/sale.service';
import { savedSale, saveItemFailure, saveSale } from '../actions/sale.actions';

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

  constructor(private actions$: Actions, private saleService: SaleService) {}
}
