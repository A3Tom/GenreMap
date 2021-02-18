import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TermLengthEnum } from '../models/term-length.enum';

const headers = new HttpHeaders()
  .set("Accept", "application/json")
  .set("Content-Type", "application/json");

@Injectable()
export class MostListenedService {
  constructor(
    private http: HttpClient) {}

  getTopArtists(termLength: TermLengthEnum): Observable<any> {
    let url = this.getUrl('artist', termLength);

    return this.http.get<any>(url, {headers});
  }
  
  //TODO: Make virtual method for this in a base class
  private getUrl(type: string, termLength: TermLengthEnum): string {
    return `${environment.baseSpotifyApi}me/top/${type}?` +
            `time_range=${termLength}`;
  }
}