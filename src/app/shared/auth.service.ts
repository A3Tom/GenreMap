import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

    getToken(): Observable<any> {
        const body = 'grant_type=client_credentials';
        return this.http.post(
            environment.authTokenAPI, 
            body, 
            {   
                headers: new HttpHeaders({
                    Authorization: 'Basic  ' + btoa(environment.client.clientId + ':' + environment.client.clientSecret),
                    'Content-Type': 'application/x-www-form-urlencoded;'
            })
        });
    }
}