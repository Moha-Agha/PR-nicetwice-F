
const production = true;

export let IMAGE_URL;
//api add the url /api
export let API;

if (production) {
  IMAGE_URL = 'https://nicetwicede.herokuapp.com/';
  API = '/api';
} else {
  IMAGE_URL = 'http://localhost:5000/';
  API = '';
}
