import './render-modal-product.css';
import modalHTML from './render-modal-products.html?raw';
import { getProductById } from '../../use-cases/get-product-by-id';

let modal, product;

export const showModal = async( id ) => {
    modal?.classList.remove('hide-modal');

    if ( modal ){
        product = await getProductById( id );
        setProductData( product );
    }
};

const setProductData = async( id) => {
    modal.innerHTML =`
            <div class="items">
                <img src="https://placehold.co/350x350" alt="">
                <div class="price-category"> 
                <p class="product-name">${product.productName}</p>
                <p class="product-price">Price: ${product.price}$ </p>
                <p class="product-category">Category: ${product.category}</p>
                </div>
            </div>
        `;
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
};

export const renderModalProduct = ( element ) => {

    const card = element.querySelector('.products');

    if ( !modal ){
        modal = document.createElement('div');
        modal.className = 'modal hide-modal';
        modal.innerHTML =`
            <div class="items">
                <p class="product-name"></p>
                <img src="https://placehold.co/350x350" alt="">
                <div class="price-category"> 
                <p class="product-price">Price: $ </p>
                <p class="product-category">Category:</p>
                </div>
            </div>
        `;
    }

    modal.addEventListener( 'click', ( event ) => {
        if ( event.target.className === 'modal'){
            hideModal();
        }
    }); 

    card.addEventListener( 'click', ( event ) =>{
        showModal( event.target.closest('.grid').id );
    });

    element.append( modal );
};