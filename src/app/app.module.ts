import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchComponent } from './shared/search/search.component';
import { BooksComponent } from './books/books/books.component';
import { AuthorsComponent } from './books/authors/authors/authors.component';
import { EditorialComponent } from './books/editorial/editorial/editorial.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    BooksComponent,
  
  ],
  imports: [
    BrowserModule, NavComponent,
    SearchComponent,
    BooksComponent,
    AuthorsComponent,
    EditorialComponent,
    HttpClient,
    BooksModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
