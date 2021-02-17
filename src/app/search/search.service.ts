import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../shared/token-storage.service';

const headers = new HttpHeaders()
  .set("Accept", "application/json")
  .set("Content-Type", "application/json");

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private http: HttpClient) {}

  searchArtists(searchTerm: string): Observable<any> {
    let url = this.getSearchUrl('artist', searchTerm);

    return this.http.get<any>(url, {headers});
  }

  private getSearchUrl(type: string, searchTerm: string): string {
    return `${environment.baseSpotifyApi}search?` +
            `q=${searchTerm}&` +
            `type=${type}`;
  }



}
 