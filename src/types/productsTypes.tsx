export interface IProducts {
  id: number;
  name: string;
  description: string;
  collection?: string;
  price: number;
  img: string;
  colorHeart?: string;
  action?: Action;
}

export enum Action {
  delete,
  add,
}

export interface IwishList {
  total: number;
  products: IProducts[];
}
