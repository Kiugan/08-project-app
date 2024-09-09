import shopStore from "../../store/shop-store";
import { renderGrid } from "../render-grid/render-grid";
import './render-buttons.css'

export const renderButton = ( element ) =>{
    const storePage = document.createElement('div');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    const currentPage = document.createElement('span');

    storePage.classList.add('button-div');
    prevButton.innerText = '< Prev';
    nextButton.innerText = 'Next >';
    currentPage.id = 'current-page';
    currentPage.innerText = shopStore.getCurrentPage();

    storePage.append(prevButton, currentPage, nextButton);
    element.append(storePage);


    prevButton.addEventListener( 'click', async() => {
        if( shopStore.getCurrentPage() === 1) return;
        await shopStore.loadPreviusPage();
        currentPage.innerHTML = shopStore.getCurrentPage();

        renderGrid( element );
    });

    nextButton.addEventListener( 'click', async() => {
        if( shopStore.getProducts().length < 9) return;
        await shopStore.loadNextPage();
        currentPage.innerHTML = shopStore.getCurrentPage();

        renderGrid( element );
    });
}