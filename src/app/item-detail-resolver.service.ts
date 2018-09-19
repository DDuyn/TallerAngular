import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ItemsServiceService } from '../api/items-service.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailResolverService implements Resolve<Book> {

  constructor(private api: ItemsServiceService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    const id = route.paramMap.get('id')
    return this.api.getItem(+id)
  }


}
