import { HttpClient } from '@angular/common/http';
import { BookServiceService } from '../services/book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  get resultados(){
    return this.BookServiceService.Url;
  }

  constructor(private BookServiceService: BookServiceService, private http: HttpClient) { }

  ngOnInit(): void {
  }

}
