"use server"
import { revalidatePath } from "next/cache";

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

export const getComments = async (id) => {
    const res = await fetch(`${URL}/products/${id}/comments`, {cache: "no-store"});
    const data = await res.json();
    return data;
}

// export const postComment = async (id,rate ,comment) => {
//     const product = getProductDetails(id);

//     const newComment = {
//         id: String(new Date().getTime()),
//         rating: rate,
//         username: "Erkan TOKMAK",
//         comment: comment,
//         date: new Date().toISOString(),
//     }

//     const updatedComment = [...product, newComment];

//     const res = await fetch(`${URL}/products/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedComment),
//     });
//     return res.json();
// }


export const postComment = async (id, rate, comment) => {
    const product = await getProductDetails(id);

    const newComment = {
        id: String(new Date().getTime()),
        rating: rate,
        username: "Erkan TOKMAK",
        comment: comment,
        date: new Date().toISOString(),
    }

    const updatedComments = product.comments ? [...product.comments, newComment] : [newComment];

    const updatedProduct = {
        ...product,
        comments: updatedComments
    };

    const res = await fetch(`${URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    });

    revalidatePath("/shop/[id]", "page");

    return res.json();
}