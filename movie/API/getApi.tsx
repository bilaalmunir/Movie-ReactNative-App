import { Movie, Trending } from "@/types/interfaces";
import { REACT_APP_API_KEY,REACT_APP_BASE_URL } from "@env";

export const getPopularMovies = async(pageNumber:Number): Promise<Movie[]> => {
const url: string =`${REACT_APP_BASE_URL}movie/popular?language=en-US&page=${pageNumber}&api_key=${REACT_APP_API_KEY}`
console.log("getPopularMovies"+url)
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

export const getTrendingData = async(pageNumber:Number): Promise<Trending[]> => {
  const url: string =`${REACT_APP_BASE_URL}trending/all/day?language=en-US&page=${pageNumber}&api_key=${REACT_APP_API_KEY}`
  console.log("getTrendings"+url)
  try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.results as Trending[]; // Return the array of Movie objects
    } catch (error) {
      console.error('Error fetching Trending data:', error);
      return []; // Ensure to return an empty array if an error occurs
    }
  }