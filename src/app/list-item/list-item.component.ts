import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Book } from '../Book';
import { ItemsServiceService } from '../../api/items-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit, OnDestroy {

  printBooks:Book[]
  chkStock: boolean
  subscription: Subscription

  //@Output() onSelectedItem: EventEmitter<Book>

  constructor(private api: ItemsServiceService, private router: Router) {
    //this.onSelectedItem = new EventEmitter
   
    this.api.getItems().subscribe((response: Book[]) => {
        this.printBooks = response
    })
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe()
  }

  onSelectItem(book: Book){
    this.router.navigate(['/items', book.id])
    //this.onSelectedItem.emit(book)
  }
}