export interface DeliveryDestination {
    id: number;
    customer_id: number;
    destinations_name: string;
    destinations_postcode: string;
    destinations_address:string;
}

export type DeliveryDestinationList = DeliveryDestination[]