import fetchJsonp from 'fetch-jsonp';

const FETCH_PHOTO_DATA = 'FETCH_PHOTO_DATA';

const FLICKR_URL =
  'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

export function fetchPhoto(keyword) {
  const url = FLICKR_URL + keyword;
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
