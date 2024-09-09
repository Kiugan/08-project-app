import { Product } from "../models/product"

/**
 * 
 * @param {Like<Product>} localhostProduct
 * @returns {Product}
 */
export const localhostProductToModel = ( localhostProduct ) => {

    const {
        photo,
        price,
        product_name,
        id,
        isActive,
        category,
    } = localhostProduct;

    return new Product({
        photo,
        price,
        productName: product_name,
        id,
        isActive,
        category,
    });
}