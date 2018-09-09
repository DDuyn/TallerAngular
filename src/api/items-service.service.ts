import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  private baseURL = 'http://localhost:3000'

  constructor(private http: Http) { }

    public getItems(): Observable<any> {
      return this.http.get(`${this.baseURL}/items`, { headers: this.getHeaders()})
        .pipe(map(x => x.json()))
    }

    public getItem(id: number): Observable<any> {
      return this.http.get(`${this.baseURL}/items/${id}`, {headers: this.getHeaders()})
        .pipe(map(x => x.json()))
    }

    private getHeaders() {
      let headers = new Headers()
      headers.append('Accept', 'application/json')
      return headers
    }


}
