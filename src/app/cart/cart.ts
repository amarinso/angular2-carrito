import {Component, Input, Inject} from 'angular2/core';
import {CartService} from './cartService';
import {Product} from '../providers/product';
import {Products} from '../providers/products';
import {Router, RouteParams, RouterLink, Location} from 'angular2/router';


@Component({
  selector: 'cart',
  template: `
  <div>
    <h1>Añadir al carrito</h1>
    <span>{{product.__name}}</span>
    <input type="text" [value]="quantity" #q/>
    <button type="submit" (click)="onSubmit($event, q.value)">Enviar</button>
  </div>
  `,
  providers: [ Products, CartService ]
})
export class Cart {
  product: Product;
  quantity: string;

  constructor( @Inject(CartService) private cartService: CartService,
               private products: Products,
               private location: Location,
               private router: Router,
               params: RouteParams){
    var code = params.get('code');
    this.quantity = params.get('quantity');
    this.product = products.get(code);
  }

  onSubmit(event, quantity) {
    console.log(event);
    this.cartService.add2cart(this.product, quantity);
    this.router.navigate(['/ProductSearch']);
  }



}
