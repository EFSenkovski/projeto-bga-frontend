import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { Interceptor } from './interceptor';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
  {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
];
