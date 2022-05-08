import { BookServiceService } from './../services/book-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  book!: any;
  constructor(private bookService: BookServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
     
      const {_id} = params
      
      this.book = this.bookService.getBookById(_id);
      
    })
  }

}
