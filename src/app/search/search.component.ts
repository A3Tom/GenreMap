import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputField: FormControl = new FormControl();
  searchTerm: string = "";
  artists: any;

  constructor(private searchService: SearchService) { }

  //I realise none of this is efficient, it's just fast. Will be refactored ASAP

  ngOnInit(): void {
    this.inputField.valueChanges
      .subscribe(res => {
        this.searchTerm = res;
    })
  }

  search(): void {
    this.searchService.searchArtists(this.searchTerm)
      .subscribe(res => {
        console.log(res);
        this.artists = res.artists.items;

        console.log(this.artists);
        
    })
  }

}
