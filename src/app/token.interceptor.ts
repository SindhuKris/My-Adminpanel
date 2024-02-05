import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router, private storeSer: StoreService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const accessToken = this.storeSer.token;
        const refresh = this.storeSer.refreshToken;
        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                    'x-refresh': `${refresh}`,
                },
            });
        }
        return next.handle(request);
    }
}

