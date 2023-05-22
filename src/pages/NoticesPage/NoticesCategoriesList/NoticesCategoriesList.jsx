import React from 'react';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import { CollectionContainer } from './NoticesCategoriesList.styles.js';
import { NoSearchResult } from 'shared/components/Search/Search.styles';

import Pagination from 'shared/components/Pagination';

const NoticesCategoriesList = ({
  totalPages,
  currentPage,
  notices,
  setCurrentPage,
  setFetching,
  setNotices,
}) => {
  const [noticesAfterDel, setNoticesAfterDel] = useState(notices);
  const { t } = useTranslation();

  useEffect(() => {
    setNoticesAfterDel(notices);
  }, [notices]);

  const deleteAndRefresh = id => {
    setNoticesAfterDel(noticesAfterDel.filter(notice => notice._id !== id));
  };

  return (
    <>
      <CollectionContainer>
        {noticesAfterDel.length ? (
          noticesAfterDel.map(notice => (
            <NoticeCategoryItem
              key={notice._id}
              notice={notice}
              deleteAndRefresh={deleteAndRefresh}
              setNotices={setNotices}
            />
          ))
        ) : (
          <NoSearchResult>{t('No_result')}</NoSearchResult>
        )}
      </CollectionContainer>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setFetching={setFetching}
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
