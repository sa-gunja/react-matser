const API_KEY = "72da35ecf3591807229441e9bc7984a4";
const Base_Path = "https://api.themoviedb.org/3/";

interface IMovie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  id: number;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${Base_Path}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
