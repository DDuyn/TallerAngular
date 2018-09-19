import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnChanges  {

 selectedLang: string
  
  constructor() { 
    //this.selectedLang = this.languageService.getLanguage()
  }
  ngOnChanges(){
    //this.selectedLang = this.languageService.getLanguage()
  }

  ngOnInit(){
   
  }


}
