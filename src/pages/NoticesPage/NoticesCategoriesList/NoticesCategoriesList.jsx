import React, { useEffect, useState } from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import { CollectionContainer } from './NoticesCategoriesList.styles.js';
import Pagination from 'shared/hooks/pagination';

import data from './data.json';
import useAuth from 'shared/hooks/useAuth';

const NoticesCategoriesList = ({ categoryName }) => {
  const [notices, setNotices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const categoryNotices = data.filter(
      notice => notice.category === categoryName
    );

    const noticesWithImagesAnsUserId = categoryNotices.map(notice => ({
      ...notice,
      imageUrl: `https://placekitten.com/${
        Math.floor(Math.random() * 1000) + 300
      }/${Math.floor(Math.random() * 1000) + 300}`,
      userId: user.id,
    }));

    setNotices(noticesWithImagesAnsUserId);
  }, [categoryName, user.id]);

  // useEffect(() => {
  //   const fetchNotices = async () => {
  //     try {
  //       const response = await fetch(`/api/notices?category=${categoryName}`);
  //       const data = await response.json();
  //       setNotices(data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   fetchNotices();
  // }, [categoryName]);

  return (
    <>
      <CollectionContainer>
        {notices.map(notice => (
          <NoticeCategoryItem
            key={notice.id}
            notice={notice}
            userId={user.id}
          />
        ))}
      </CollectionContainer>
      {notices.length > 2 && <Pagination />}
    </>
  );
};

export default NoticesCategoriesList;
