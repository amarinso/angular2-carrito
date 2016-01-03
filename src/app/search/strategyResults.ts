import {Product} from '../providers/product';

export interface StrategyResults {
  quantity: number,
  products: Product[],
  error?: string
}
