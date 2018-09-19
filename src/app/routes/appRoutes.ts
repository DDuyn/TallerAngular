import { WelcomeComponent } from '../welcome/welcome.component';
import { ListItemComponent } from '../list-item/list-item.component';
import { DetailItemComponent } from '../detail-item/detail-item.component';
import { ItemDetailResolverService } from '../item-detail-resolver.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { AuthGuardService } from '../auth-guard.service';
import { LoginComponent } from '../login/login.component';

export const appRoutes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: WelcomeComponent },
    { path: 'items', loadChildren: '../item/item.module#ItemModule'},
    { path: 'cart', component: CartItemComponent},
    { path: 'login', component: LoginComponent}
]