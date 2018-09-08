import { Pipe, PipeTransform } from '@angular/core';
import { es } from './es'
import { en } from './en'
import { de } from './de'

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  translations: Map<string, object>

  constructor(){
    this.translations = new Map([['es', es], ['en', en], ['de', de]])
  }

  transform(key: string, lang: string): string {
    let translate: string

    if(!lang) return key

    const translation = this.translations.get(lang)

    if(!translation) return key

    return translation[key]

  }

}
