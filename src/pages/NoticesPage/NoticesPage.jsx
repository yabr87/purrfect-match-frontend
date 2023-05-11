import React from 'react';
// import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import NoticesSearch from './NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
// import NoticesFilters from './NoticesFilters/NoticesFilters';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '43px',
      }}
    >
      {/* <NoticesSearch /> */}
      {/* <NoticesFilters /> */}
      <NoticesCategoriesNav />
      <NoticesCategoriesList categoryName={categoryName} />
      <button onClick={handleAddPet} disabled={!isAuthenticated}>
        Add pet
      </button>
    </div>
  );
}

export default NoticesPage;
