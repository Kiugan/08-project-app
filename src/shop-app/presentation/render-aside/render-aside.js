import asideHTML from  './render-aside.html?raw';
import './render-aside.css';
import { getCategoriesiList } from '../../use-cases/get-product-list';

export const renderAside = async( element ) => {

    const categories = await getCategoriesiList();
    console.log(categories);

    element.innerHTML = asideHTML;

    const categorisLi = element.querySelector('.aside-list');

    categorisLi.innerHTML = 'Categories <hr> </hr>';

    categories.forEach(element => {
        categorisLi.innerHTML += `
            <li> ${element} </li>
        `
    });
};