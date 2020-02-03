export const authorizationApi = () =>{
const client_id = "3a08967961024b1f9a55b77f1f11698c"
const url = 'https://accounts.spotify.com/authorize'
const clientID = `client_id=${client_id}`
const redirect_uri = `redirect_uri=http://localhost:3000/`
const scope = `scope=user-read-private user-read-email`
const responseType = `response_type=token`
  return window.location = `${url}/?${clientID}&${redirect_uri}&${scope}&${responseType}`
}