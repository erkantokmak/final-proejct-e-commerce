const URL = "http://localhost:3000"

export const getNewArrivals = async () => {
    const res = await fetch(`${URL}/products`, {cache: "no-store"});
    const data = await res.json();
    const newArrivals = data.filter((product)=> product.newArrival === true);
    return newArrivals;
}

export const getTopSeller = async () => {
    const res = await fetch(`${URL}/products`, {cache: "no-store"});
    const data = await res.json();
    const onSale = data.filter((product)=> product.topSeller === true);
    return onSale;
}

export const getAlsoLike = async () => {
    const res = await fetch(`${URL}/products`, {cache: "no-store"});
    const data = await res.json();
    const onSale = data.filter((product)=> product.alsoLike === true);
    return onSale;
}

export const getCustomerComments = async () => {
    const res = await fetch(`${URL}/customerComments`, {cache: "no-store"});
    const data = await res.json();
    return data;
}

export const getProductDetails = async (id) => {
    const res = await fetch(`${URL}/products/${id}`, {cache: "no-store"});
  
    const data = await res.json();
    return data;
}

