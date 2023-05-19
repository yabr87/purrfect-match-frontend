import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonPage, Flex, Box } from './Pagination.styles';
import Icon from 'shared/components/Icon';
import { useParams } from 'react-router-dom';

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  setFetching,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const search = searchParams.get('search');
  const { categoryName } = useParams();

  const numberValue = page => Number(page);

  /* функція відповідає за візуалізацію рендеру кількості сторінок
   та стилізації поточної сторінки*/
  const pagesNoMob =
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

  const pagesMob =
    totalPages <= 3 || currentPage < 2
      ? Array.from(
          { length: totalPages > 3 ? 3 : totalPages },
          (_, index) => 1 + index
        )
      : Array.from({ length: 3 }, (_, index) =>
          currentPage + 2 > totalPages
            ? totalPages - 2 + index
            : currentPage + index - 1
        );

  const pages = window.innerWidth > 480 ? pagesNoMob : pagesMob;

  /* scroll to top  */

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* params*/
  const checkParams = () => {
    const params = {};
    if (['sell', 'lost-found', 'for-free'].includes(categoryName)) {
      params.category = categoryName;
    }
    if (categoryName === 'favorite') {
      params.favorite = true;
    }
    if (categoryName === 'own') {
      params.own = true;
    }
    if (search) {
      params.search = search;
    }
    if (title) {
      params.title = title;
    }
    return params;
  };

  /* click on button page*/

  const handleClick = ({ target }) => {
    const numberPage = numberValue(target.id);
    if (currentPage === numberPage) {
      return;
    }
    setFetching(true);
    const params = checkParams();
    params.page = numberPage;
    setSearchParams(params);
    setCurrentPage(numberPage);
    scrollUp();
  };

  /* click on arrow button*/

  const arrowHandleDecr = () => {
    if (currentPage === 1) {
      return;
    }
    setFetching(true);
    const params = checkParams();
    params.page = currentPage - 1;
    setSearchParams(params);
    setCurrentPage(prev => prev - 1);
    scrollUp();
  };

  const arrowHandleIncr = () => {
    if (currentPage === totalPages) {
      return;
    }
    setFetching(true);
    const params = checkParams();
    params.page = currentPage + 1;
    setSearchParams(params);
    setCurrentPage(prev => prev + 1);
    scrollUp();
  };

  return (
    <Box>
      <Flex>
        <ButtonPage type="button" id="prev" onClick={arrowHandleDecr}>
          <Icon
            id="arrow-left"
            s="#54adff"
            f="#54adff"
            style={{ strokeWidth: 2 }}
          ></Icon>
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
              s="#54adff"
              f="#54adff"
              style={{ transform: 'rotate(180deg)', strokeWidth: 2 }}
            ></Icon>
          </ButtonPage>
        }
      </Flex>
    </Box>
  );
};

export default Pagination;
