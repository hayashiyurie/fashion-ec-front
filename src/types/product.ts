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

export interface ProductInventoryManagement {
    id: number;
    product_id: string;
    number_of_stock: number
}

export interface Genre {
    id: number;
    genre_name: string;
}

export type ProductList = Product[];