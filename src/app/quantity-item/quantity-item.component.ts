import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-quantity-item',
  templateUrl: './quantity-item.component.html',
  styleUrls: ['./quantity-item.component.css']
})
export class QuantityItemComponent implements OnInit {

  @Input() id: number
  @Input() quantity: number
  @Output() quantityOut: EventEmitter<number>

  constructor(private cartService: CartServiceService) {
    this.quantityOut = new EventEmitter
  }

  ngOnInit() {
  }

  incrementQuantity(id: number){
    this.quantity++
    this.emitQuantity(id, this.quantity)
  }

  decrementQuantity(id: number){
    this.quantity--
    this.emitQuantity(id, this.quantity)
  }

  changeQuantity(id: number, quantity: number){
    this.emitQuantity(id, quantity)
  }

  emitQuantity(id: number, quantity: number){
    this.quantityOut.emit(quantity)
  }

}
