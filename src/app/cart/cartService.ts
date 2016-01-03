import {Injectable} from 'angular2/core';
import {Product} from '../providers/product';

@Injectable()
export class CartService {

  add2cart(product: Product, quantity: number) {
    console.log('call parent frame with', product, quantity);
  }
}
