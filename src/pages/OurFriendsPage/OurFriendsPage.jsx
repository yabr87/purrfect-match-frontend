import { useState, useEffect } from 'react';

import Container from 'shared/components/Container';
import Title from 'shared/components/Title';

import OurFriendsList from 'pages/OurFriendsPage/OurFriendsList';
import { getAllFriends } from 'utils/ApiOurFriends';

import { FriendsContainer } from './OurFriendsPage.styles';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchAllFriends = async () => {
      try {
        const result = await getAllFriends();
        setFriends(result.data.results);
      } catch (error) {
        console.error('Failed to get friends', error);
      }
    };
    fetchAllFriends();
  }, []);

  return (
    <Container>
      <FriendsContainer>
        <Title as="h2" color="#000000">
          Our friends
        </Title>
        <OurFriendsList friends={friends} />
      </FriendsContainer>
    </Container>
  );
};

export default OurFriendsPage;
