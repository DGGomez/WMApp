import axios from 'axios';

export const createData = (title, location, description, callback) => async () =>{
    try{
        const res = await axios.post('/create', {title,location,description});
        callback();
    }
    catch(err){
        console.log(err);
    }
};

export const readData = (location, callback) => async () =>{
    try{
        const res = await axios.get(`/read/${location}`);
        callback();
    }
    catch(err){
        console.log(err);
    }
};