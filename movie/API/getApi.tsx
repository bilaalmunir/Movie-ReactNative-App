import { Movie } from "@/types/interfaces";
import { REACT_APP_API_KEY,REACT_APP_BASE_URL } from "@env";

export const getPopularMovies = async(): Promise<Movie[]> => {
const url: string =`${REACT_APP_BASE_URL}movie/popular?language=en-US&page=2&api_key=${REACT_APP_API_KEY}`
console.log(url)
try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.results as Movie[]; // Return the array of Movie objects
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return []; // Ensure to return an empty array if an error occurs
  }
}