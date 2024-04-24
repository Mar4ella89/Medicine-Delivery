import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://medicine-delivery-ztb4.onrender.com/api/medicines',
  params: {
    limit: 12,
  },
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
