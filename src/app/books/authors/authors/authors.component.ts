import { BookServiceService } from './../../services/book-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  

  get resultados(){
    return this.bookService.Url;
  }
  
  constructor(private bookService: BookServiceService, private http: HttpClient) { }

  ngOnInit(): void {



  }

}
