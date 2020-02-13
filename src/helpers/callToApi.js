import axios from 'axios';
const token = window.localStorage.getItem('token')
const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'authorization': `Bearer ${token}`
  },
});

export const authorizationApi = () =>{
const client_id = "3a08967961024b1f9a55b77f1f11698c"
const url = 'https://accounts.spotify.com/authorize'
const clientID = `client_id=${client_id}`
const redirect_uri = `redirect_uri=http://localhost:3000/home`
const scope = `scope=user-read-private user-read-email`
const responseType = `response_type=token`
  window.localStorage.removeItem('token')

  return window.location = `${url}/?${clientID}&${redirect_uri}&${scope}&${responseType}`
}

export const getTrackers = async( setTrackers ) => {
  try {
    const response  = await api.get('/playlists/3BgU73S9ZzYMjaAHtLaOM3/tracks');
    setTrackers(response.data);
    
  } catch (error) {
    console.log(error)
  }

}