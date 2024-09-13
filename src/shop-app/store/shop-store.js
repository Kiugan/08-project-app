import { getProductsByCategory } from "../use-cases/get-product-by-category";
import { loadProductByPage } from "../use-cases/load-products-by-page";
import { getProductSearch } from "../use-cases/get-products";


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

const loadPageByCategory = async( category ) =>{
    const products = await getProductsByCategory( category );
    if( products.length <= 9){
        state.products = products;
    }
    state.products = products.slice(0,9);
}
const loadNextPageCategory = async( category ) => {
    const products = await getProductsByCategory( category );
    if( products.length <= 9) return;
    state.currentPage += 1;
    state.products = products.slice(state.currentPage * 9 + 1, state.currentPage * 9 + 9 );
}

const loadPreviusPageCategory = async( category ) => {
    
}

const resetPage = () =>{
    state.currentPage = 0;
}

const getSearch = async( product ) => {
    const search = await getProductSearch( product );
    state.products = search;
};

export default{
    loadNextPage,
    loadPreviusPage,
    loadPageByCategory,
    loadNextPageCategory,
    loadPreviusPageCategory,
    getSearch,
    resetPage,

    getProducts: () => [...state.products], //Esto debe hacerse porque los objetos se pasan como referencia
    getCurrentPage: () => state.currentPage, //Pero los primitivos pasan como valor
}