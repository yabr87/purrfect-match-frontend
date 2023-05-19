import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import useAuth from 'shared/hooks/useAuth';

import NoticesFilters from './NoticesFilters/NoticesFilters';
import NoticesSearch from './NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

import Button from 'shared/components/Button';
import CircleButton from 'shared/components/CircleButton/CircleButton';
import Container from 'shared/components/Container';
import Icon from 'shared/components/Icon/Icon';
import { useMedia } from 'shared/hooks/useMedia';

import { getNotices } from 'utils/ApiNotices';

function NoticesPage() {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleAddPet = () => {
    isLoggedIn
      ? navigate('/add-pet')
      : alert('Please register or sign in to be able to add pet');
  };

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page ? Number(page) : 1;
  });
  const [notices, setNotices] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { categoryName } = useParams();
  const [category, setCategory] = useState(categoryName);

  const [title, setTitle] = useState(() => {
    const titleSearch = searchParams.get('title');
    return titleSearch ? titleSearch : null;
  });

  if (categoryName !== category) {
    const params = { page: 1 };
    if (['sell', 'lost-found', 'for-free'].includes(categoryName)) {
      params.category = categoryName;
    }
    if (categoryName === 'favorite') {
      params.favorite = true;
    }
    if (categoryName === 'own') {
      params.own = true;
    }
    if (title) {
      params.title = title;
    }
    setSearchParams(params);
    setCurrentPage(1);
    setCategory(categoryName);
  }
  useEffect(() => {
    setFetching(true);
    const params = { page: currentPage };
    if (['sell', 'lost-found', 'for-free'].includes(categoryName)) {
      params.category = categoryName;
    }
    if (categoryName === 'favorite') {
      params.favorite = true;
    }
    if (categoryName === 'own') {
      params.own = true;
    }
    if (title) {
      params.title = title;
    }
    getNotices(params)
      .then(({ data }) => {
        setTotalPages(data.totalPages);
        setNotices(data.results);
      })
      .catch(e => console.log(e))
      .finally(setFetching(false));
  }, [categoryName, currentPage, title]);

  return (
    <Container>
      <NoticesSearch
        setTitle={setTitle}
        setCurrentPage={setCurrentPage}
        setSearchParams={setSearchParams}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '43px',
        }}
      >
        <NoticesCategoriesNav />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <NoticesFilters />
          {isUpToWidth480 ? (
            <CircleButton
              style={{
                zIndex: '1999',
                position: 'fixed',
                bottom: '50px',
                right: '24px',
              }}
              onClick={handleAddPet}
              disabled={!isLoggedIn}
            >
              Add pet
            </CircleButton>
          ) : (
            <Button style={{ width: '129px' }} onClick={handleAddPet}>
              Add pet
              <Icon id="plus-small" />
            </Button>
          )}
        </div>
      </div>
      {fetching && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -65%)',
            zIndex: 1000,
          }}
        >
          <Loader />
        </div>
      )}
      <NoticesCategoriesList
        totalPages={totalPages}
        currentPage={currentPage}
        notices={notices}
        setCurrentPage={setCurrentPage}
        setNotices={setNotices}
        setFetching={setFetching}
      />
    </Container>
  );
}

export default NoticesPage;
