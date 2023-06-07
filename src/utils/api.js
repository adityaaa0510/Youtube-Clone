import axios from "axios"
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    
    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'd5c1433e13mshb4567f8cf662841p1b1205jsn68639a1b0bf9',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
   export const fetchDataFromApi = async(url) =>{
    const{data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }