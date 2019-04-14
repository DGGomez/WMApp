import axios from 'axios';

export const createData = (name, location, description, callback) => async () =>{
    try{
        const res = await axios.post('/create', {name, location,description});
        // should return an order number
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = (location, callback) => async () =>{
    try{
        const res = await axios.post(`/read`, {location});
        
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const paymentData = (callback) => async () =>{
    try{
        const res = await axios.post(`/charge`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};
