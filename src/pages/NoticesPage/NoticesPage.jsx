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
  const [searchParams] = useSearchParams();
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
  const [fetching, setFetching] = useState(true);

  const { categoryName } = useParams();
  const title = searchParams.get('title');
  useEffect(() => {
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

    if (fetching) {
      getNotices(params)
        .then(({ data }) => {
          if (isUpToWidth480) {
            setCurrentPage(prev => prev + 1);
            setNotices(prev => [...prev, ...data.results]);
            return;
          }
          setNotices(data.results);
          setTotalPages(data.totalPages);
        })
        .catch(e => console.log(e))
        .finally(setFetching(false));
    }
  }, [categoryName, currentPage, isUpToWidth480, title, fetching]);

  return (
    <Container>
      <NoticesSearch
        setItems={setNotices}
        setTotalPages={setTotalPages}
        setFetching={setFetching}
        setCurrentPage={setCurrentPage}
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
      {fetching && <Loader />}
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
