import instance from './Api';

export const getMyPets = async () => {
  const { data } = await instance.get('/api/pets');
  return data;
};

export const addMyPet = async data => {
  const { data: result } = await instance.post('/api/pets', data);
  return result;
};

export const removeMyPet = async petId => {
  const { data } = await instance.delete(`/api/pets/${petId}`);
  return data;
};
