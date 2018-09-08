import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _language: string  

  constructor() { 
    this._language = "es"
  }

  setLanguage(lang: string){
    this._language = lang
    console.log("Set Service", this._language)
  }

  getLanguage(){

    return this._language
  }
}
