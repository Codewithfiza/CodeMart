import axios from "axios";


let getProducts = ()=>{
    return axios.get("https://dummyjson.com/products?limit=50")
    .then((res)=>res.data.products)
}


let getProductDetails = (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
        .then((res) => res.data)   // <-- also changed
}


export {getProducts, getProductDetails}