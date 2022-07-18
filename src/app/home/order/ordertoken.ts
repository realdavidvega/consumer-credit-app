import { Order } from './order';

export class OrderToken {
  constructor(public order: Order[],
              public subtotal: number,
              public total: number
              ) {}
}
