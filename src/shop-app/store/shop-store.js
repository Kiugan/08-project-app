import { loadProductByPage } from "../use-cases/load-products-by-page";


const state = {
    currentPage: 0,
    products: [],
}

const loadNextPage = async() => {
    const products = await loadProductByPage( state.currentPage + 1);
    if ( products.length === 0 ) return;

    state.currentPage += 1;
    state.products = products;
}

export default{
    loadNextPage,

    getProducts: () => [...state.products],
    getCurrentPage: () => [...state.currentPage]
}