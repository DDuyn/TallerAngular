import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Book } from '../app/Book'


@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  private baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

    public getItems(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.baseURL}/items`)
    }

    public getItem(id: number): Observable<Book> {
      return this.http.get<Book>(`${this.baseURL}/items/${id}`)
    }

    public updateItem(book: Book): Observable<Book>{
      return this.http.put<Book>(`${this.baseURL}/items/${book.id}`, book)
     
    }
}