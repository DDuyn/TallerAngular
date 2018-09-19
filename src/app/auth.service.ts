import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean 

  constructor(){
    this.isLoggedIn = false
  }

  login(username: string, password: string): Observable<boolean> {
    if(username == 'David' && password == '123') this.isLoggedIn = true
    return of(this.isLoggedIn).pipe(delay(1000))
  }

  isLogged(){
    return this.isLoggedIn
  }
 
}
