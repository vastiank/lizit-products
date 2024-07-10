export interface ProductState {
  products: Product[];
  productsAux: Product[];
  productRef: object;
  actionType: string;
  flow: string;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}
