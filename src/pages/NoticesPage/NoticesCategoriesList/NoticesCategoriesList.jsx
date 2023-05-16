import React, { useEffect, useState } from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import { useParams } from 'react-router-dom';

import { CollectionContainer } from './NoticesCategoriesList.styles.js';

import { getNotices } from '../../../utils/ApiNotices';

const NoticesCategoriesList = () => {
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [notices, setNotices] = useState([]);

  let { categoryName } = useParams();

  useEffect(() => {
    getNotices({ category: categoryName, page: currentPage }).then(
      ({ data }) => {
        console.log(data.results);
        setNotices(data.results);
        setCurrentPage(data.page);
        setTotalPages(data.totalPages);
      }
    );
  }, [categoryName, currentPage]);

  return (
    <CollectionContainer>
      {notices.map(notice => (
        <NoticeCategoryItem key={notice._id} notice={notice} />
      ))}
    </CollectionContainer>
  );
};

export default NoticesCategoriesList;
