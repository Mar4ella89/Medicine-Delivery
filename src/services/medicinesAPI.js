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
