import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// Well this file needs to not be like this at all.
// However! This does work at the moment but is clearly, the most primitive form it could take
let token = "TOKEN_GOES_HERE";

const headers = new HttpHeaders()
  .set("Accept", "application/json")
  .set("Content-Type", "application/json")
  .set("Authorization", 'Bearer ' + token);

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }



  searchArtists(searchTerm: string): Observable<any> {
    let url = this.getSearchUrl('artist', searchTerm);

    return this.http.get(url, {headers});
  }

  private getSearchUrl(type: string, searchTerm: string): string {
    return `https://api.spotify.com/v1/search?` +
            `q=${searchTerm}&` +
            `type=${type}`;
  }
}
 