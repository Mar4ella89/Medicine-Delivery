import axios from 'axios';
import PropTypes from 'prop-types';

const instance = axios.create({
  baseURL: 'https://medicine-delivery-ztb4.onrender.com/api/medicines',
  //   params: {
  //     api_key: 'b331236c37988e13f653df9937f18de4',
  //     language: 'en-US',
  //     include_adult: false,
  //   },
});

export const allMedicines = async () => {
  const { data } = await instance.get(`/`);
  return data;
};

// export const trendingMovie = async () => {
//   const mediaType = 'all';
//   const timeWindow = 'day';
//   const { data } = await instance.get(`/trending/${mediaType}/${timeWindow}`);

//   return data;
// };

// export const getMovieById = async id => {
//   const { data } = await instance.get(`/movie/${id}`);
//   return data;
// };

// export const searchMovie = async (searchQuery, page) => {
//   const { data } = await instance.get(`/search/movie`, {
//     params: {
//       query: searchQuery,
//       page,
//     },
//   });
//   return data;
// };

// export const getMovieCast = async id => {
//   const { data } = await instance.get(`/movie/${id}/credits`);
//   return data;
// };

// export const getMovieReview = async (id, page) => {
//   const { data } = await instance.get(`/movie/${id}/reviews`, {
//     params: {
//       page,
//     },
//   });
//   return data;
// };

// getMovieById.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// searchMovie.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   page: PropTypes.string.isRequired,
// };

// getMovieCast.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// getMovieReview.propTypes = {
//   id: PropTypes.string.isRequired,
//   page: PropTypes.string.isRequired,
// };
