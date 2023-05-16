import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonPage, Flex, Box } from './Pagination.styles';
import Icon from 'shared/components/Icon';
// import { useEffect } from 'react';
/////////////////////////////////////////
// import { getNotices } from 'utils/ApiNotices';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  const numberValue = page => Number(page);

  // функція відповідає за візуалізацію рендеру кількості сторінок та
  // та стилізації поточної сторінки
  const pages =
    totalPages <= 5 || currentPage < 3
      ? Array.from(
          { length: totalPages > 5 ? 5 : totalPages },
          (_, index) => 1 + index
        )
      : Array.from({ length: 5 }, (_, index) =>
          currentPage + 2 > totalPages
            ? totalPages - 4 + index
            : currentPage + index - 2
        );

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
    if (currentPage === totalPages) {
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
