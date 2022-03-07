export interface CartItemModel {
    productId: number,
    productName: string,
    productPrice: number, 
    productDesc: string,
    productImg?: string,
    productImgAlt?: string,
    productCnt: number
}