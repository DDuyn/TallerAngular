import { Component, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { CartServiceService } from '../cart-service.service';
import { CartItem } from '../CartItem';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnChanges, OnDestroy {

  languages: any[]
  selectedLang: string
  cartLength: number = 0
  private subscription: Subscription

  //@Output() onChangeLang : EventEmitter<string>
  @Output() onSelectMenu: EventEmitter<string>

  constructor(private languageService: LanguageService, private cartService: CartServiceService, private translate: TranslateService){
    this.languages = [
      {key: 'es', value: 'Español'},
      {key: 'en', value: 'English'},
      {key: 'de', value: 'Deutch'}
    ]
    this.subscription = this.cartService.getCart()
      .pipe(map((items: CartItem[]) => {
        return items.map(x => x.id).length 
      }
    )).subscribe(totals => this.cartLength = totals)
    this.onSelectMenu = new EventEmitter
  }

  ngOnInit(){
    this.selectedLang = this.languages[0].key
    
  }

  ngOnChanges(){
    this.translate.use(this.selectedLang)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  changeLang(){
    this.translate.use(this.selectedLang)
    //this.languageService.setLanguage(this.selectedLang)
  }

}
