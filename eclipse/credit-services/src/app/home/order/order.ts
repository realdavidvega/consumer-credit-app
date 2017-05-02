export class Order {
  constructor(public idOrder: number,
              public quantOrder: number,
              public nameOrder: string,
              public imageOrder: string,
              public priceOrder: number,
              public totalOrder: number,
              public precioEnvio: number
              ) {}
}
