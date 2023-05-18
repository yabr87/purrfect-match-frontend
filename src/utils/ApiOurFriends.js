import axios from 'axios';

const instanceFriends = axios.create({
  baseURL: `https://purrfect-match.onrender.com`,
});

export const getAllFriends = async () => {
  try {
    const result = await instanceFriends.get('/api/friends');
    return result;
  } catch (error) {
    console.error('Failed to get friends', error);
    throw error;
  }
};
