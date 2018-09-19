import { Injectable } from '@angular/core';
import { Book } from './Book';
import { CartItem } from './CartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private _cart: CartItem[]
  private _carts$: BehaviorSubject<CartItem[]>

  constructor() { 
    this._cart = []
    this._carts$ = new BehaviorSubject(this._cart)
  }

  private getIndexItem(id: number){
    return this._cart.findIndex(x => x.id === id)
  }

  addToCart(item: Book, quantity: number){
    const items : CartItem = {...item, quantity: quantity} 
    const index = this.getIndexItem(item.id)
    if(index < 0) {
      this._cart.push(items)
    } else {
      this._cart[index].quantity += quantity   
    }

    this._carts$.next(this._cart)
  }

  plus(id: number){
    const index = this.getIndexItem(id)
    if(index >= 0) this._cart[index].quantity++
    this._carts$.next(this._cart)
  }

  minus(id: number){
    const index = this.getIndexItem(id)
    if(index >= 0) this._cart[index].quantity--
    this._carts$.next(this._cart)
  }

  changeQuantity(id: number, quantity: number){

    if(quantity == 0) {  
      this.deleteToCart(id)
    } else {
      const index = this.getIndexItem(id)
      this._cart[index].quantity = quantity
    }
  }

  deleteToCart(id: number){
    this._cart = this._cart.filter(x => x.id !== id)
    this._carts$.next(this._cart)
  }

  getCart(): Observable<CartItem[]>{
    return this._carts$.asObservable()
  }
}
