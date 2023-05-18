import instance from './Api';

export const getMyPets = async () => {
  const { data } = await instance.get('/api/pets');
  return data;
};

export const addMyPet = async params => {
  const { data } = await instance.postForm('/api/pets', params);
  return data;
};

export const removeMyPet = async petId => {
  const { data } = await instance.delete(`/api/pets/${petId}`);
  return data;
};
