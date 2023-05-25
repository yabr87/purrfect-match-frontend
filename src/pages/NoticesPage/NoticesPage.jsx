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

import { toast } from 'react-toastify';

import { getNotices } from 'utils/ApiNotices';
import SelectedFilters from '../../shared/components/SelectedFilters/SelectedFilters';

function NoticesPage() {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  const handleAddPet = () => {
    isLoggedIn ? navigate('/add-pet') : toast.error(t('alert_register_signin'));
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [age, setAge] = useState([]);

  const [sex, setSex] = useState('');
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page ? Number(page) : 1;
  });
  const [notices, setNotices] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { categoryName } = useParams();
  const [category, setCategory] = useState(categoryName);

  const handleFilterOpenChange = isOpen => {
    setIsFilterOpen(isOpen);
  };

  const getAgeLabel = value => {
    switch (value) {
      case '0':
        return `0-12 ${t('m')}`;
      case '1':
        return `1 ${t('year')}`;
      case '2':
        return `+2 ${t('years')}`;
      default:
        return '';
    }
  };

  const selectedFilters = [
    ...(sex ? [{ label: t(sex), value: sex }] : []),
    ...age.map(a => ({ label: getAgeLabel(a), value: a })),
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

    if (!isFilterOpen) {
      getNotices(params)
        .then(({ data }) => {
          setTotalPages(data.totalPages);
          setNotices(data.results);
        })
        .catch(e => toast.error(`${t('alert_Failed_to_get_notice!')}:`, e))
        .finally(setFetching(false));
    }
  }, [
    categoryName,
    currentPage,
    title,
    sex,
    age,
    isFilterOpen,
    setSearchParams,
  ]);

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
            sex={sex}
            age={age}
            setSex={setSex}
            setAge={setAge}
            onFilterOpenChange={handleFilterOpenChange}
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
        {!isFilterOpen && (
          <SelectedFilters
            filters={selectedFilters}
            setSex={setSex}
            setAge={setAge}
            onChange={updatedFilters => {
              console.log('Updated Filters:', updatedFilters);
            }}
          />
        )}
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
