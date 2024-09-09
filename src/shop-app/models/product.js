export class Product {

    /**
     * 
     * @param {Like<Product>} ProductDataLike 
     */
    constructor({ id, isActive, price, photo, productName, category }) {
        this.id       = id;
        this.isActive = isActive;
        this.price  = price;
        this.photo    = photo;
        this.productName = productName;
        this.category    = category;
    }
    

}