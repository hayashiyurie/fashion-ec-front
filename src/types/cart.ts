export type Cart = {
    product_id: number;
    sum_price: number;
    quantity: number | 1;
}[]

export type ProductInCart = {
    product_id: number;
    sum_price: number;
    quantity: number | 1;
}

export interface AddedProduct {
    id: number;
    price: number;
}