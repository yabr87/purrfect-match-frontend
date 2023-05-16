import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { ButtonPage, Flex, Box } from './Pagination.styles';
import Icon from 'shared/components/Icon';
import { getPetBySerch } from 'pages/NoticesPage/NoticesPage';
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const { categoryName } = useParams();

  const numberValue = page => Number(page);
  const pagesCount = Math.ceil(100 / 12);
  const pages =
    pagesCount <= 5 || currentPage < 3
      ? Array.from(
          { length: pagesCount > 5 ? 5 : pagesCount },
          (_, index) => 1 + index
        )
      : Array.from({ length: 5 }, (_, index) =>
          currentPage + 2 > pagesCount
            ? pagesCount - 4 + index
            : currentPage + index - 2
        );

  useEffect(() => {
    // if (!cards) {
    //   return;
    // }

    //тимчасове апі для пагінації
    getPetBySerch(categoryName, title, currentPage);
    //   setTotalPets(count);
  }, [currentPage, categoryName, title]);

  const handleClick = ({ target }) => {
    const numberPage = numberValue(target.id);

    !title
      ? setSearchParams({ page: numberPage })
      : setSearchParams({ title, page: numberPage });
    if (currentPage === numberPage) {
      return;
    }
    setCurrentPage(numberPage);
  };

  const arrowHandleDecr = () => {
    if (currentPage === 1) {
      return;
    }
    setSearchParams({ title, page: currentPage - 1 });
    setCurrentPage(prev => prev - 1);
  };

  const arrowHandleIncr = () => {
    if (currentPage === pagesCount) {
      return;
    }
    setSearchParams({ title, page: currentPage + 1 });
    setCurrentPage(prev => prev + 1);
  };

  return (
    <Box>
      <Flex>
        <ButtonPage type="button" id="prev" onClick={arrowHandleDecr}>
          <Icon id="arrow-left" s="#54ADFF" f="#54ADFF"></Icon>
        </ButtonPage>

        {pages.map(page => (
          <ButtonPage
            type="button"
            key={page}
            className={page === currentPage && 'current_page'}
            id={page}
            onClick={handleClick}
          >
            {page}
          </ButtonPage>
        ))}
        {
          <ButtonPage id="next" onClick={arrowHandleIncr} type="button">
            <Icon
              id="arrow-left"
              s="#54ADFF"
              f="#54ADFF"
              style={{ transform: 'rotate(180deg)' }}
            ></Icon>
          </ButtonPage>
        }
      </Flex>
    </Box>
  );
};

export default Pagination;
