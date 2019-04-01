import axios from 'axios';

export const createData = (name, location, description, callback) => async () =>{
    try{
        const res = await axios.post('https://sheltered-island-21284.herokuapp.com/create', {name, location,description});
        // should return an order number
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = (location, callback) => async () =>{
    try{
        const res = await axios.post(`https://sheltered-island-21284.herokuapp.com/read`, {location});
        
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const paymentData = (callback) => async () =>{
    try{
        const res = await axios.post(`https://sheltered-island-21284.herokuapp.com/charge`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};
