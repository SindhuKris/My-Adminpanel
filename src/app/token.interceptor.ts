import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private storSer: StoreService
  ) {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const accessToken = this.storSer.token;
      if (accessToken){
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ${accessToken}',
            'x-fresh': '${refresh}',
          },
        });
      }
    return next.handle(request);
  }
}

