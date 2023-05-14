import ModalApproveAction from 'components/ModalApproveAction';
// import Congrats from 'components/ModalApproveAction/Congrats';
// import Logout from 'components/ModalApproveAction/Logout';
// import Delete from 'components/ModalApproveAction/Delete';
import PetCard from 'components/ModalApproveAction/PetCard';
// import { useState } from 'react';
import {} from './HomePage.styles';

const HomePage = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);

  // const close = () => {
  //   setIsModalOpen(false);
  // };

  // const approveLogout = () => {
  //   // const dispatch = useDispatch();
  //   const onLogout = () => {
  //     dispatch(logout());
  //   };
  // };
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ModalApproveAction
        // close={close}
        // approve={approveLogout}
        >
          {/* <Delete /> */}
          {/* <Congrats /> */}
          {/* <Logout /> */}
          <PetCard />
        </ModalApproveAction>
        PURRFECT MATCH
      </div>
    </>
  );
};

export default HomePage;