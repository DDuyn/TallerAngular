import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnChanges {

  languages: any[]
  selectedLang: string

  //@Output() onChangeLang : EventEmitter<string>
  @Output() onSelectMenu: EventEmitter<string>

  constructor(private languageService: LanguageService){
    this.languages = [
      {key: 'es', value: 'Español'},
      {key: 'en', value: 'English'},
      {key: 'de', value: 'Deutch'}
    ]
    //this.onChangeLang = new EventEmitter
    this.onSelectMenu = new EventEmitter
  }

  ngOnInit(){
    this.selectedLang = this.languages[0].key
    
  }

  ngOnChanges(){
    this.selectedLang = this.languageService.getLanguage()
  }

  changeLang(){
    this.languageService.setLanguage(this.selectedLang)
    //this.onChangeLang.emit(this.selectedLang)   
  }

  showMenu(link: string){
    this.onSelectMenu.emit(link)
  }
}
