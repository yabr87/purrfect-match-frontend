import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'shared/components/Container';
import Title from 'shared/components/Title';
import Loader from 'shared/components/Loader';

import OurFriendsList from 'pages/OurFriendsPage/OurFriendsList';
import { getAllFriends } from 'utils/ApiOurFriends';

import { FriendsContainer } from './OurFriendsPage.styles';
import { toast } from 'react-toastify';

const OurFriendsPage = () => {
  const { t } = useTranslation();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllFriends = async () => {
      try {
        setLoading(true);
        const result = await getAllFriends();
        setFriends(result.data.results);
      } catch (error) {
        toast.error('Failed to get friends', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllFriends();
  }, []);

  return (
    <Container>
      <FriendsContainer>
        <Title>{t('Our_friends')}</Title>
        {loading && <Loader />}
        <OurFriendsList friends={friends} />
      </FriendsContainer>
    </Container>
  );
};

export default OurFriendsPage;
