import axios from 'axios';


const API_KEY = '35976196-061e7a31cd62ac9d42d5b46cf';

export async function fetchGalleryPictures({ query, pageNumber = 1 }) {
  const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=12`;

  try {
    const resp = await axios.get(BASE_URL);

    return resp.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
