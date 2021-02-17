import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry,  catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';
import { environment } from 'src/environments/environment';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable( {
  providedIn: 'root'
})
export class HttpInterceptorClass  implements HttpInterceptor {
    constructor(private tokenService: TokenStorageService) {
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.handleAuth(req);
        return this.handleErrors(next.handle(req));
    }

    isAuthRequest(requestUrl: string): boolean {
        return requestUrl === environment.authTokenAPI;
    }

    handleAuth(request: HttpRequest<any>): HttpRequest<any> {
        const token = this.tokenService.getToken();
        
        if(token == null || this.isAuthRequest(request.url))
            return request;
        
        return request.clone(
            { headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) 
        });
    }

    handleErrors(req: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> {
        return req.pipe(
            retry(3),
            catchError((err : HttpErrorResponse) => {
            let errorMessage = '';
            if (err.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${err.message}`;
            } else {
                // server-side error
                errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
            }
            console.log(err);
            return throwError(errorMessage);
            })
        )
    }
}