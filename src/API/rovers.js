import Utils from './Utils'

// const API_KEY = process.env.REACT_APP_MARS_KEY;
// react-deploy;

const API_KEY = '59CDafTnK5TeXMtpaRwlrBGoJJ0WoLciNEVfIe5z'

export const getPhoto = (roverName, page, sol, camera) =>
  Utils.fetchJSON(
    `HTTPS://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&page=${page}&${camera}&api_key=${API_KEY}`
  )

export const manifest = () =>
  Utils.fetchJSON(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${API_KEY}`
  )
