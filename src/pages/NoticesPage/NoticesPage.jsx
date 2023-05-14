import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';

import NoticesSearch from './NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

import Button from 'shared/components/Button';
import CircleButton from 'shared/components/CircleButton/CircleButton';
import Container from 'shared/components/Container';
import Icon from 'shared/components/Icon/Icon';
import { useMedia } from 'shared/hooks/useMedia';

function NoticesPage() {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const { categoryName } = useParams();

  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleAddPet = () => {
    isLoggedIn
      ? navigate('/add-pet')
      : alert('Please register or sign in to be able to add pet');
  };

  return (
    <Container>
      <NoticesSearch />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '43px',
        }}
      >
        <NoticesCategoriesNav />
        {isUpToWidth480 ? (
          <CircleButton
            style={{
              zIndex: '999',
              position: 'fixed',
              bottom: '50px',
              right: '24px',
            }}
            onClick={handleAddPet}
            disabled={!isLoggedIn}
          />
        ) : (
          <Button onClick={handleAddPet}>
            Add pet
            <Icon id="plus-small" />
          </Button>
        )}
      </div>

      <NoticesCategoriesList categoryName={categoryName} />
    </Container>
  );
}

export default NoticesPage;
