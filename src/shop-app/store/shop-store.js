import { loadProductByPage } from "../use-cases/load-products-by-page";


const state = {
    currentPage: 0,
    products: [],
}

const loadNextPage = async() => {
    const products = await loadProductByPage( state.currentPage + 1);
    if ( products.length === 0) return;

    state.currentPage += 1;
    state.products = products;
}

const loadPreviusPage = async() => {
    if (state.currentPage === 0) return;
    const products = await loadProductByPage( state.currentPage - 1);

    state.currentPage -= 1;
    state.products = products;
}

export default{
    loadNextPage,
    loadPreviusPage,

    getProducts: () => [...state.products], //Esto debe hacerse porque los objetos se pasan como referencia
    getCurrentPage: () => state.currentPage, //Pero los primitivos pasan como valor
}