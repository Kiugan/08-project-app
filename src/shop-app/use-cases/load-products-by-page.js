import { localhostProductToModel } from '../mappers/localhost-to-product.mappers'


export const loadProductByPage = async( page = 3) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/products?_page=${ page }&_per_page=9`;
    const res = await fetch(url);
    const data = await res.json();

    const products = data.data.map( product => localhostProductToModel(product) );
    console.log(products)
    return products;
}