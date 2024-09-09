import { renderButton } from './presentation/render-buttons/render-buttons';
import { renderGrid } from './presentation/render-grid/render-grid';
import productStore from './store/shop-store';

export const ShopApp = async( element ) =>{
    element.innerHTML = 'Loading...';
    await productStore.loadNextPage();
    element.innerHTML = ' ';

    renderGrid( element );
    renderButton( element );
}

