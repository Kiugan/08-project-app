import { localhostProductToModel } from "../mappers/localhost-to-product.mappers";


export const getCategoriesiList = async( ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/products`;
    const res = await fetch(url);
    const data = await res.json();
    

    const products = data.map( product => localhostProductToModel(product) );
    const categories = [...new Set(products.map(product => product.category))].sort();
    
    return categories;
};