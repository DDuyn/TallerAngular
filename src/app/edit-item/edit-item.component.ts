import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../Book';
import { ItemsServiceService } from '../../api/items-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  book: Book
  prize = new FormControl('')

  constructor(private itemService: ItemsServiceService, private router: ActivatedRoute) {
    this.book = this.router.snapshot.data.book
    this.prize.setValue(this.book.prize)    
   }

  ngOnInit() {
  }

  edit(){
    this.book.prize = this.prize.value
    this.itemService.updateItem(this.book).subscribe((response: Book) => {
      this.book = response
    })
  }

}
