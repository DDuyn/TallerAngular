import { Component, OnChanges } from '@angular/core';
import { Books } from './Books'
import { LanguageService } from './language.service';
import { ItemsServiceService } from '../api/items-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnChanges{
  title = 'devShop';
  book: Books
  showList: boolean
  response: string
  responseO: Observable<string>

constructor(private languageService: LanguageService, private api: ItemsServiceService){
  this.languageService.setLanguage('es')
  this.showList = false

  this.api.getItem(1).subscribe(x => {
    this.response = x
    console.log('Respuesta', this.response['name'])
  })

}

ngOnChanges(){
  
}


  showDetailItem(event: Books){
    this.book = event
    this.showList = false
  }

  showListItems(event: boolean){
      this.book = null
      this.showList = event
  }

  showPage(event: string){
    if (event == 'Home'){
      this.showList = false
    }else if (event == 'Links'){
      this.showList = true
    }
  }

}
