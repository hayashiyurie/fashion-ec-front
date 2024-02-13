export type Cart = {
    product_id: number;
    sum_price: number;
    quantity: number | 1;
}[]

export type ProductInCart = {
    product_id: number;
    sum_price: number;
    quantity: number | 1;
    // product_name: string;
    // product_images: ProductImage[]
}

export interface AddedProduct {
    id: number;
    price: number;
    // product_images: ProductImage[]
}
export interface Product {
    id: number;
    size_id: number;
    color_id: number;
    genre_id: number;
    product_name:string;
    explanation:string;
    tax_included_price: number;
    jan_code: string;
    sku_code: string;
}
export interface ProductImage {
    id: number;
    product_id: number;
    image_id: number;
    sort_order: string;
    image: Image
    
}

export interface Image {
    id: number;
    path: string;
    path_url: string
}