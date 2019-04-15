import axios from 'axios';
import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:8080/api';
} else {
  url = 'http://localhost:8080/api';
}

axios.defaults.baseURL = url;

class DataApi {
  constructor() {
    this.path = `/`;
  }

  async fetchData(args) {
    try {
      const { data } = await axios.post(`${this.path}/read`, { ...args });
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }

  async createData(args) {
    try {
      const res = await axios.post(`${this.path}/create`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
  
    async paymentData(args) {
    try {
      const res = await axios.post(`${this.path}/charge`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
}

export {
  DataApi,
};

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/login`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }
  
    async RegisterUser(args) {
    try {
      const { data } = await axios.post(`${this.path}/register`, args);
      return data;
    } catch (e) {
      throw e;
    }
    }
    async LogoutUser() {
    try {
      await removeAuthToken();
      dispatch({
            type: 'LOGOUT_USER'
        });
    } catch (e) {
      throw e;
    }
    }
    async storeAuthToken() {
    try {
     await localStorage.setItem('authToken', JSON.stringify(token));
    } catch (e) {
      throw e;
    }   
    }
    async fetchAuthToken() {
    try {
     let token = await localStorage.getItem('authToken');
      return JSON.parse(token);
    } catch (e) {
      throw e;
    }   
    } 
    async removeAuthToken() {
    try {
      await localStorage.removeItem('authToken');
    } catch (e) {
      throw e;
    }   
    }       
    async tokenLogin() {
    try {
      let token = await fetchAuthToken();
      if(token) {
      const { data } = await axios({
                method: 'get',
                url: `${this.path}/token-login`,
                headers: { 'Authorization': `Bearer ${token}` }
            });
      
            storeAuthToken(data.token);
            dispatch({
                type: 'TOKEN_LOGIN',
                payload: {
                    user: data.user,
                    token: data.token
                }
            });
        
        } else {
            console.log('no token');
        }
    } catch (e) {
      throw e;
    }
  }
}

export const User = new UserApi();
