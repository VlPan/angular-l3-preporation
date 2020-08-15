import { Observable, of } from 'rxjs';
import { Inject } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Inject({
  provideIn: 'root',
})
export class AppInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const httpsReq = req.clone({
      url: req.url.replace('http://', 'https://'),
    });

    return next.handle(httpsReq).pipe(
        finalize(() => console.log('Req done!'))
    );
  }
}
