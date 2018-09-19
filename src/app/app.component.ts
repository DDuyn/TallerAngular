import { Component, OnChanges } from '@angular/core';
import { Book } from './Book'
import { LanguageService } from './language.service';
import { ItemsServiceService } from '../api/items-service.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnChanges{
  title = 'devShop';
  book: Book
  showList: boolean
  showCart: boolean
  showDetail: boolean
  showWelcome: boolean
  
constructor(private translate: TranslateService){
  //this.languageService.setLanguage('es')
  translate.setDefaultLang('es')
  translate.use('es')

}

ngOnChanges(){
  
}

  showDetailItem(event: Book){
    this.book = event
    this.showList = false
  }

  showListItems(event: boolean){
      this.book = null
      this.showList = event
  }

}