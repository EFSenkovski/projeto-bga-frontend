import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { Interceptor } from './interceptor';

registerLocaleData(localePt,'pt')

export const httpInterceptorProviders = [
  {provide: LOCALE_ID, useValue: 'pt-BR'},
  {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
  {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL',
  }
];
