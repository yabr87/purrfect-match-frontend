import React, { useEffect, useState } from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import data from './data.json';

const NoticesCategoriesList = ({ categoryName }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const categoryNotices = data.filter(
      notice => notice.category === categoryName
    );
    setNotices(categoryNotices);
  }, [categoryName]);

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
    <div>
      {notices.map(notice => (
        <NoticeCategoryItem key={notice.id} notice={notice} />
      ))}
    </div>
  );
};

export default NoticesCategoriesList;
