import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  public Url: any[] = [];
  public historial:any[]=[];
  public valor:string = '';
  public busqueda:any[]=[];

  constructor(private http: HttpClient) { 

    this.http
    .get(
      'https://library-api-rest.vercel.app/api/books'
      )
      .subscribe((resp: any) => {
        
       this.Url = resp;
       this.historial = this.Url;
     
     })
  }
  buscarBook(query: string = ''){
    query = query.trim().toLocaleLowerCase();
    this.valor = query;
    this.Url = this.historial;
    if(query.length && !this.historial.includes(query)) {
        this.busqueda = this.Url.filter(book => book.title.trim().toLowerCase().includes(query))
    
        if(this.busqueda) 
        
        {this.Url = this.busqueda;
          }  }
}
getBookById(id: string): any{
  return this.Url.find(({_id})=> id === _id);
}
}
