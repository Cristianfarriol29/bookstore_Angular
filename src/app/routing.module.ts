import { DetalleComponent } from './books/detalle/detalle.component';
import { AuthorsComponent } from './books/authors/authors/authors.component';
import { EditorialComponent } from './books/editorial/editorial/editorial.component';
import { BooksComponent } from './books/books/books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'editorial',
    component: EditorialComponent
  },
  {
    path: 'author',
    component: AuthorsComponent
  },
  {
    path: 'detalle/:_id',
    component: DetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
