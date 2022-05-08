import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookServiceService } from 'src/app/books/services/book-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@ViewChild ('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
public resultadosUrl: any[] =[];

  constructor(private bookService: BookServiceService,private http: HttpClient) {}
  searchBook(){
    this.bookService.buscarBook(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
    
 }

  ngOnInit(): void {
  }

}
