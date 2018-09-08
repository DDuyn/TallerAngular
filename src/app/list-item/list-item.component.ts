import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Books } from '../Books';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {

  books: Books[]
  printBooks: Books[]
  chkStock: boolean

  @Output() onSelectedItem: EventEmitter<Books>

  constructor() {
    this.onSelectedItem = new EventEmitter
    this.books = [
      {
        key: 1, 
        name: "Rebelión en la Granja", 
        description: "Rebelión en la granja es una novela satírica del escritor británico George Orwell", 
        author: "George Orwell", 
        prize: 19.99, 
        currency: "€", 
        pages: 220, 
        stock: true,
        photo: "https://imagessl1.casadellibro.com/a/l/t0/51/9788499890951.jpg"
      },
      {
        key: 2, 
        name: "Un Mundo Feliz", 
        description: "Un mundo feliz es la novela más famosa del escritor británico Aldous Huxley", 
        author: "Aldous Huxley", 
        prize: 17.95, 
        currency: "€", 
        pages: 135, 
        stock: true,
        photo: "http://t3.gstatic.com/images?q=tbn:ANd9GcT0LvMFwN7ApsQlN6RMYc6prOXsg85jcWTa3kUwtWEU87DgwWTe"
      },
      {
        key: 3, 
        name: "El Señor de las Moscas", 
        description: "El señor de las moscas es la primera y más célebre novela de William Golding", 
        author: "William Golding", 
        prize: 23.56, 
        currency: "€", 
        pages: 300, 
        stock: false,
        photo: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ2JYVlrfxYWPKa1w3TtBqY30bjYY4IrMSfT2vNsCPU845A1OwY"
      }
    ]
    this.printBooks = this.books
   }

  ngOnInit() {
  }

  /*filterStock(){
    //if (this.chkStock) this.printBooks = this.books.filter(x => x.stock)
    //else this.printBooks = this.books
  }*/

  onSelectItem(book: Books){
    this.onSelectedItem.emit(book)
  }
}
