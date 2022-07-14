export interface ProductList {
    product: string,
    expand: boolean,
    items: Items[]
  }
  
  export interface Items {
    name: string,
    checked: boolean
  }