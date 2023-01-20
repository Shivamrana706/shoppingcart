import axios from 'axios'


const URL = '';

export const getProducts = async () => {
    try {
        return await axios.get( `${URL}/get`);
    } catch (error) {
        console.log("Error while calling  GetProucts api",error)
    }
}

export const getProductDetail = async (id) => {
    try {
        return await axios.get(`${URL}/product/${id}`);
    } catch (error) {
        console.log("Error while calling getProductDetail api", error);
    }
}

export const registerUser = async (data) => {
    try {
        return await axios.post(`${URL}/register`, data);
    } catch (error) {
        console.log("Error while register the user api",error);
        
    }
}

export const userLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log("Error while login Api ",error);
        return error.response.data;
    }
} 