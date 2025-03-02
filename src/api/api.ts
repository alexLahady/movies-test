/*curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/11' \
     --header 'Authorization: Bearer ACCESS_TOKEN'

*/

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY; 

async function fetchData() {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/11', {
      headers: {
        'Authorization': `Bearer ${apiKey}` 
      }
    });
    
    console.log(response.data); 
  } catch (error) {
    console.error('Erreur:', error); 
  }
}

fetchData();
