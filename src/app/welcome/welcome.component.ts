import { Component, Input, OnChanges } from '@angular/core';
import { LanguageService } from '../language.service';

interface Languages{
  value: string,
  title: string,
  subtitle: string
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnChanges  {

 selectedLang: string
  
  constructor(private languageService: LanguageService) { 
    this.selectedLang = this.languageService.getLanguage()
  }
  ngOnChanges(){
    this.selectedLang = this.languageService.getLanguage()
    console.log("hola", this.languageService.getLanguage());
  }

  ngOnInit(){
   
  }


}
