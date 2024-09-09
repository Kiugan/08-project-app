import { renderGrid } from './presentation/render-grid/render-grid';
import productStore from './store/shop-store';

export const ShopApp = async( element ) =>{
    element.innerHTML = 'Loading...';
    await productStore.loadNextPage();
    element.innerHTML = ' ';

    renderGrid( element );

}

