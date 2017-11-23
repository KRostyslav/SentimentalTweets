import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {HttpService} from 'app/services/http-service.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( public httpService: HttpService ) {}

  intercept( request: HttpRequest<any>,
             next: HttpHandler ): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.httpService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
