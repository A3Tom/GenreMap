import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders()
  .set("Accept", "application/json")
  .set("Content-Type", "application/json");

@Injectable()
export class SearchService {
  constructor(
    private http: HttpClient) {}

  searchArtists(searchTerm: string): Observable<any> {
    let url = this.getUrl('artist', searchTerm);

    return this.http.get<any>(url, {headers});
  }

  //TODO: Make virtual method for this in a base class
  private getUrl(type: string, searchTerm: string): string {
    return `${environment.baseSpotifyApi}search?` +
            `q=${searchTerm}&` +
            `type=${type}`;
  }
}
 