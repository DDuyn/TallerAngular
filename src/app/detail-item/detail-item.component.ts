import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Books } from '../Books';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() book: Books[]
  @Output() onCloseDetail: EventEmitter<boolean>

  constructor() { 
    this.onCloseDetail = new EventEmitter
  }

  ngOnInit() {
  }

  close(){
    this.onCloseDetail.emit(true)
  }

}
