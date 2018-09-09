import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Books } from '../Books';
import { ItemsServiceService } from '../../api/items-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {

  printBooks: Observable<Books[]>
  chkStock: boolean

  @Output() onSelectedItem: EventEmitter<Books>

  constructor(private api: ItemsServiceService) {
    this.onSelectedItem = new EventEmitter
   
    this.api.getItems().subscribe(x => {
      this.printBooks = x
      console.log(this.printBooks)
    })
 

   }

  ngOnInit() {
  }

  onSelectItem(book: Books){
    this.onSelectedItem.emit(book)
  }
}
