import React from 'react';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import { CollectionContainer } from './NoticesCategoriesList.styles.js';
import Pagination from 'shared/hooks/pagination';

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
          <div>{t('No_result')}</div>
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
