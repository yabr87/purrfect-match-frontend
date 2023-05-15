import OurFriends from 'components/OurFriends';
import friends from './data/friends.json';

const OurFriendsPage = () => {
  return <OurFriends friends={friends} />;
};

export default OurFriendsPage;
