import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://medicine-delivery-ztb4.onrender.com/api/orders',

  params: {
    limit: 12,
  },
});

export const allOrders = async () => {
  const { data } = await instance.get(`/`);
  return data;
};

export const addOrder = async data => {
  try {
    const { data: result } = await instance.post('/', data);
    return result;
  } catch (error) {
    console.error('Error submitting order:', error);
    throw error;
  }
};
