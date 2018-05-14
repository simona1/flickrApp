import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

const API_ROOT_URL =
  'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

const FETCH_PHOTO_DATA = 'FETCH_PHOTO_DATA';

export function fetchPhoto(keyword) {
  const url = API_ROOT_URL + keyword;
  return dispatch => {
    fetchJsonp(url, {
      jsonpCallback: 'jsoncallback',
      timeout: 5000,
    })
      .then(response => {
        return response.json();
      })
      .then(payload => {
        dispatch({
          type: FETCH_PHOTO_DATA,
          payload,
        });
      });
  };
}

export default FETCH_PHOTO_DATA;
