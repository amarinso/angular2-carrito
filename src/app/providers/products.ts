import {Injectable} from 'angular2/core';
import {Product} from './product';

@Injectable()
export class Products {
  products: Product[];

  constructor() {
    this.products = [
      {__name: 'AAAYY', __brand: 'MAAAA', __code: 'FAA', __price: 1, __leyend:'', __conservation:'', __contains:'', __format:''},
      {__name: 'BBBY', __brand: 'MBBB', __code: 'FBBB', __price: 2, __leyend:'', __conservation:'', __contains:'', __format:''},
      {__name: 'CCCY', __brand: 'MCCC', __code: 'FCCC', __price: 3, __leyend:'', __conservation:'', __contains:'', __format:''},
      {__name: 'DDDY', __brand: 'MDDD', __code: 'FDDD', __price: 4, __leyend:'', __conservation:'', __contains:'', __format:''},
      {__name: 'AAX', __brand: 'MDDD', __code: 'FDDD', __price: 5, __leyend:'', __conservation:'', __contains:'', __format:''}
    ];
  }

  getAll() {
    return this.products;
  }

  get( code: string) {
    return this.products.find( (x)=> x.__code === code );
  }
}
