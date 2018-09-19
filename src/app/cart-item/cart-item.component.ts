import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Book } from '../Book';
import { CartServiceService } from '../cart-service.service';
import { CartItem } from '../CartItem';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges {

  cartItems: Observable<CartItem[]>
  constructor(private CartService: CartServiceService) { 
    this.cartItems = this.CartService.getCart()    
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.cartItems = this.CartService.getCart()    
  }

  deleteItemCart(id: number){
    this.CartService.deleteToCart(id)
    this.cartItems = this.CartService.getCart()
  }

  getQuantity(id: number, event: number){
    this.CartService.changeQuantity(id, event)
  }

  getTotalAmount(items: CartItem[]): number{
    return items.reduce((acc: number, item: CartItem) => {
      return acc + item.quantity * item.prize
    }, 0)
  }

}
