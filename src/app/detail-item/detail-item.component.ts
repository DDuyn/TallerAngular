import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, OnChanges } from '@angular/core';
import { Book } from '../Book';
import { CartServiceService } from '../cart-service.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ItemsServiceService } from '../../api/items-service.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  book: Book
  quantity: number 
  showInfoCart: boolean
  modalRef: BsModalRef
  y: number
  
  constructor(private CartService: CartServiceService, 
              private router: ActivatedRoute, 
              private location: Location,
              private modalService: BsModalService,
              private itemsService: ItemsServiceService) { 
    this.showInfoCart = false
    this.quantity = 1
    this.book = this.router.snapshot.data.book
    this.y = this.book.rate
  }

  ngOnInit() {
     
  }

  addItemToCart(book: Book){
      this.showInfoCart = true
      this.CartService.addToCart(book, this.quantity)
      
  }

  getQuantity(event: number){
    this.quantity = event   
  }

  close(){
    this.location.back()
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  rate(){
    this.book.rate = this.y
    this.itemsService.updateItem(this.book).subscribe((response: Book) => {
      this.book = response
    })  
  }
}
