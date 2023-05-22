import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
import SelectedFilters from '../../shared/components/SelectedFilters/SelectedFilters';

function NoticesPage() {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  const handleAddPet = () => {
    isLoggedIn ? navigate('/add-pet') : alert(t('alert_register_signin'));
  };
  const [age, setAge] = useState([]);
  const [sex, setSex] = useState('');
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page ? Number(page) : 1;
  });
  const [notices, setNotices] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { categoryName } = useParams();
  const [category, setCategory] = useState(categoryName);

  let selectedFilters = [
    { label: '3-12m', value: 'young' },
    { label: '1 year', value: 'adult' },
    { label: '2 years', value: 'old' },
  ];

  let filters = [
    {
      name: 'age',
      title: 'By age',
      options: [
        { label: `1${t('year')}`, value: '1' },
        { label: `2 ${t('year')}`, value: '2' },
        { label: `3 ${t('years')}`, value: '3' }
      ]
    },
    {
      name: 'gender',
      title: 'By gender',
      options: [
        { label: `${t('male')}`, value: 'male' },
        { label: `${t('female')}`, value: 'female' }
      ]
    }
  ];

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

    if (sex) {
      params.sex = sex;
    }

    if (age.length > 0) {
      params.age = age.join(',');
    }

    setCurrentPage(1);
    setCategory(categoryName);
  }
  useEffect(() => {
    setFetching(true);
    const params = {
      page: currentPage,
    };
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

    if (sex) {
      params.sex = sex;
    }

    if (age.length > 0) {
      params.age = age.join(',');
    }
    setSearchParams(params);

    getNotices(params)
      .then(({ data }) => {
        setTotalPages(data.totalPages);
        setNotices(data.results);
      })
      .catch(e => console.log(e))
      .finally(setFetching(false));
  }, [categoryName, currentPage, title, sex, age, setSearchParams]);

  const deleteSelectedFilter = (filterToDelete) => {
    selectedFilters = selectedFilters.filter(filter => filter.value !== filterToDelete.value)
  }

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
        <div style={{ display: 'flex', position: 'relative', gap: '12px' }}>
          <NoticesFilters
            setSex={setSex}
            setAge={setAge}
            filters={filters}
            setSearchParams={setSearchParams}
          />
          {isUpToWidth480 ? (
            <CircleButton
              z="9"
              pos="fixed"
              style={{
                bottom: '50px',
                right: '24px',
              }}
              onClick={handleAddPet}
              disabled={!isLoggedIn}
            >
              {t('Add_only_pet')}
            </CircleButton>
          ) : (
            <Button style={{ width: '129px' }} onClick={handleAddPet}>
              {t('Add_only_pet')}
              <Icon id="plus-small" />
            </Button>
          )}
        </div>
      </div>
      <div
        style={{
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <SelectedFilters filters={selectedFilters} onChange={deleteSelectedFilter}></SelectedFilters>
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
