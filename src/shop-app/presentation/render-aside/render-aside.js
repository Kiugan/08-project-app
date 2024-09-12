import asideHTML from  './render-aside.html?raw';
import './render-aside.css';
import { getCategoriesiList } from '../../use-cases/get-product-list';
import { getProductsByCategory } from '../../use-cases/get-product-by-category';
import shopStore from '../../store/shop-store';
import { renderGrid } from '../render-grid/render-grid';

let aside = false;
export const renderAside = async( element ) => {

    if( !aside ){
        createAside( element );
        aside = true;
    }

    element.addEventListener( 'click', async( event ) => {
        if( event.target.tagName  === 'LI'){
            await shopStore.loadPageByCategory( event.target.innerText );
            renderGrid( element );
        }
    });
};

const createAside = async( element ) =>{
    const categories = await getCategoriesiList();
    element.innerHTML = asideHTML;

    const categorisLi = element.querySelector('.aside-list');
    categorisLi.innerHTML = 'Categories <hr> </hr>';

    categories.forEach(element => {
        categorisLi.innerHTML += `
            <li> ${element} </li>
        `
    });
};