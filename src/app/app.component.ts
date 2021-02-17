import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { TokenStorageService } from './shared/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
    private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.authService.getToken().subscribe(res => {
      this.tokenService.saveToken(res.access_token);
    })
  }

  title = 'genreMap';
}
