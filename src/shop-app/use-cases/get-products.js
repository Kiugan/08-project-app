import { localhostProductToModel } from "../mappers/localhost-to-product.mappers";


export const getProductSearch = async( product ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products`;
    const res = await fetch(url);
    const data = await res.json();
    // Filtrar productos por coincidencia parcial del nombre
    const search = [];
    for (let index = 0; index < data.length; index++) {
        if( data[index].product_name.includes(product))
        search.push(data[index]);
    }
    // Convertir los productos filtrados al formato deseado
    const mappedProducts = search.map( element => localhostProductToModel(element));

    return mappedProducts;
};