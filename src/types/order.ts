export interface Order {
    id: number;
    postage: number;
    billing_amount: string;
    method_of_payment: number;
    destinations_name: string;
    destinations_postcode: number;
    destinations_address: string;
    order_status: string;
    created_at: string;
}
export interface OrderProduct {
    id: number;
    product_id: number;
    order_id: number;
    number_of_products: number;
    tax_included_purchase_price: number;
    order_product_status: number;
    product: Product
}
export interface DeliveryDestination {
    id: number;
    customer_id: number;
    destinations_name: string;
    destinations_postcode: string;
    destinations_address:string;
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
    product_images: ProductImage[]
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
export type OrderList = Order[];
