import React from 'react';
// import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
// import NoticesFilters from './NoticesFilters/NoticesFilters';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';
import Button from 'shared/components/Button';
import Container from 'shared/components/Container';

function NoticesPage() {
  // беремо статус аутентицікації юзера
  //   const user = useSelector(state => state.user);

  const { categoryName } = useParams();

  const navigate = useNavigate();

  // перевіряємо чи юзер ідентифікований.
  const isAuthenticated = false;

  const handleAddPet = () => {
    if (isAuthenticated) {
      navigate('/addpet');
    }
  };

  return (
    <Container>
      {/* <NoticesSearch /> */}
      {/* <NoticesFilters /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '43px',
        }}
      >
        <NoticesCategoriesNav />
        <Button onClick={handleAddPet} disabled={!isAuthenticated}>
          Add pet +
        </Button>
      </div>

      <NoticesCategoriesList categoryName={categoryName} />
    </Container>
  );
}

export default NoticesPage;
