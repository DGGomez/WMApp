import axios from 'axios';

export const createData = (title, location, description, callback) => async () =>{
    try{
        const res = await axios.post('/create', {title,location,description});
        // should return an order number
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = (orderNum, callback) => async () =>{
    try{
        const res = await axios.get(`/read/${location}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};