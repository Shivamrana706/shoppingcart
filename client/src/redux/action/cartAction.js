
import axios from 'axios';

const URL = '';


export const addToCart = (id,quantity) => async (dispatch)=> {
    try {
        const {data} = await axios.get(`${URL}/product/${id}`);
        const arrayData = data[0];
        console.log("data in redux api",data)   
        console.log("arraydata in redux api",arrayData)      
        dispatch({type:'AddToCart', payload:{...arrayData}});
    } catch (error) {
        dispatch({type:'AddToCartError', payload:error.message});
    }

}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({type:'RemoveFromCart', payload:id});
} 