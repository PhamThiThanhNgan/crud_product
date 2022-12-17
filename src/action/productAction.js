import axios from "axios";

export const GetProduct =()=>{
    return async(dispatch)=>{
        try {
            dispatch({type:"loading"})
            const request = await axios.get("https://61bee974b25c3a00173f4bd0.mockapi.io/product");
            dispatch({type:"Get_Product",product:request.data});
            dispatch({type:"loading_ejected"})
        } catch (error) {
            dispatch({type:"loading_ejected",error:error.response.error});
        }
    }
}
export const CreateProduct=(product,onSuccess)=>{
    return async(dispatch)=>{
        try {
        await axios.post("https://61bee974b25c3a00173f4bd0.mockapi.io/product",product)
        dispatch(GetProduct())
        onSuccess()
        } catch (error) {
            console.log(error);
        }
    }
}
export const DeleteProduct=(productId)=>{
    return async(dispatch)=>{
        try {
        await axios.delete(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${productId}`)
        dispatch(GetProduct())
        } catch (error) {
            console.log(error);
        }
    }
}
export const SelectProduct=(productId)=>{
    return async(dispatch)=>{
        try {
        const {data}= await axios.get(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${productId}`)
        dispatch({type:"SelectProduct",product:data})
        } catch (error) {
            console.log(error);
        }
    }
}
export const UpdateProduct=(productId,product,onSuccess)=>{
    return async(dispatch)=>{
        try {
        await axios.put(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${productId}`,product)
        dispatch(GetProduct())
        onSuccess()
        } catch (error) {
            console.log(error);
        }
    }
}