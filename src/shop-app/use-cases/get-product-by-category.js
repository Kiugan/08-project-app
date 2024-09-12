import { localhostProductToModel } from "../mappers/localhost-to-product.mappers";

export const getProductsByCategory = async(category) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products`;
    const res = await fetch(url);
    const data = await res.json();

    const products = data.filter(product => product.category === category);

    return products.map(product => localhostProductToModel(product));
};
