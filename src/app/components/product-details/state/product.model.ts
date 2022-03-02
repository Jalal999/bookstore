import { ProductModel } from "../../product-list/state/product-list.model";

export interface CartItemModel {
    id: number;
    name: string;
    price: number;
    description: string;
    imgPath?: string;
    imgAlt?: string;
}