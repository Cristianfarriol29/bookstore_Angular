import { EditorialComponent } from './editorial/editorial/editorial.component';
import { AuthorsComponent } from './authors/authors/authors.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [
    BooksComponent,
    AuthorsComponent,
    EditorialComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule
  ], exports: [BooksComponent, AuthorsComponent, EditorialComponent],
})
export class BooksModule { }
