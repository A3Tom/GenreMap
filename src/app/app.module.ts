import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpInterceptorClass } from './shared/HttpInterceptor';
import { MostListenedComponent } from './most-listened/most-listened.component';
import { SearchService } from './search/search.service';
import { MostListenedService } from './most-listened/most-listened.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MostListenedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorClass,
      multi: true
    },
    SearchService,
    MostListenedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
