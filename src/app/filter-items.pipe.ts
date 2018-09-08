import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(items: any[], filter: boolean, text: string): any[] {
    let itemsCopy= [...items]
    if(filter)
    {
      itemsCopy = items.filter(x => x.stock)
    }

    if(text){
        itemsCopy = itemsCopy.filter(x => x.name.includes(text) || x.description.includes(text))
    }

    return itemsCopy
  }

}
