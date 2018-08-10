import axios from 'axios';

import {START, SUCCESS, FAIL} from "../constance";

//hardcoded api's path here
const axiosInstance = axios.create({
  baseURL: `https://salty-ridge-37026.herokuapp.com/`
});

export default store => next => action => {
  const {callAPI, type, ...rest} = action;


  //  if callAPI param isn't exist nothing will happen...
  if (!callAPI) return next(action);

  // on another case i'll call to the API
  next({
    ...rest, type: type + START
  });

  return axiosInstance(callAPI)
  .then(res => {
    console.log(`---- ${res.status} RESPONSE FROM BD: ${JSON.stringify(res.data)}`);
    return res.data;
  })
  .then(responseAPI => next({...rest, type: type + SUCCESS, responseAPI}))
  .catch(error => next({...rest, type: type + FAIL, error}))
}