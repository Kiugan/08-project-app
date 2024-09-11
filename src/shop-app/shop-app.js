import { renderAside } from './presentation/render-aside/render-aside';
import { renderButton } from './presentation/render-buttons/render-buttons';
import { renderGrid } from './presentation/render-grid/render-grid';
import { renderModalProduct } from './presentation/render-moda-product/render-modal-product';
import productStore from './store/shop-store';

export const ShopApp = async( element1 , element2 ) =>{
    element1.innerHTML = 'Loading...';
    await productStore.loadNextPage();
    element1.innerHTML = ' ';

    renderGrid( element1 );
    renderAside( element2 );
    renderButton( element1 );
    renderModalProduct( element1 );
}

