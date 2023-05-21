import instance from './Api';

export const getMyPets = async () => {
  try {
    const { data } = await instance.get('/api/pets');
    return data;
  } catch (error) {
    console.error('Failed to get pets', error);
    throw error;
  }
};

export const addMyPet = async params => {
  try {
    const { data } = await instance.postForm('/api/pets', params);
    return data;
  } catch (error) {
    console.error('Failed to add pet', error);
    throw error;
  }
};

export const removeMyPet = async petId => {
  try {
    const { data } = await instance.delete(`/api/pets/${petId}`);
    return data;
  } catch (error) {
    console.error('Failed to delete pet', error);
    throw error;
  }
};
