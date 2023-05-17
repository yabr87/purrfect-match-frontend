import React from 'react';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import { CollectionContainer } from './NoticesCategoriesList.styles.js';
import Pagination from 'shared/hooks/pagination';

const NoticesCategoriesList = ({
  totalPages,
  currentPage,
  notices,
  setCurrentPage,
}) => {
  return (
    <>
      <CollectionContainer>
        {notices.length ? (
          notices.map(notice => (
            <NoticeCategoryItem key={notice._id} notice={notice} />
          ))
        ) : (
          <div>There is no result</div>
        )}
      </CollectionContainer>
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
