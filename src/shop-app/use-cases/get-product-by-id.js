import { localhostProductToModel } from "../mappers/localhost-to-product.mappers";


export const getProductById = async( id ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/products/${ id }`;
    const res = await fetch(url);
    const data = await res.json();
    

    const product = localhostProductToModel( data );

    return product;
};