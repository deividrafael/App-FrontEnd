import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const api = axios.create({
    baseURL: 'https://app-qr-saude.herokuapp.com/',
    //baseURL: 'http://localhost:8080/',
 
});

api.interceptors.request.use(async  (config) => {
  try {
    const token = await AsyncStorage.getItem('@QrApi:token');
    
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }

    return config;
  } catch (error) {
    return null;
  }

})


export default api;