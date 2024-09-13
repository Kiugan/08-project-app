import shopStore from '../../store/shop-store';
import gridHTML from './render-grid.html?raw';
import './render-grid.css';
import { Product } from '../../models/product';

let grid;

export const createGrid = () => {
    const grid = document.createElement('div');
    grid.classList.add('product-grid');
    grid.innerHTML = gridHTML;

    return grid;
}

export const renderGrid = ( element, category = '' ) => {
    
    const products = shopStore.getProducts();

    if( !grid ){
        grid = createGrid();
        element.append( grid );
    }

    let productHTML = '';
    products.forEach( product => {
        productHTML += `
            <div class="grid" id="${ product.id }">
                <p class="product-name">${ product.productName }</p>
                <img src="https://placehold.co/200x200" alt="">
                <p class="product-price">Price: ${ product.price }$ </p>
                <p class="product-category" id="${ category }">Category: ${ product.category }</p>
            </div>
        `;
    });

    grid.querySelector('.products').innerHTML = productHTML;
}