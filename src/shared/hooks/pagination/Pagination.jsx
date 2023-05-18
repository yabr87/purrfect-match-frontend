import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonPage, Flex, Box } from './Pagination.styles';
import Icon from 'shared/components/Icon';
import { useMedia } from 'shared/hooks/useMedia';
import { useParams } from 'react-router-dom';
/////////////////////////////////////////

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  setFetching,
}) => {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');
  const search = searchParams.get('search');

  const numberValue = page => Number(page);
  const { categoryName } = useParams();
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
    const params = { page: numberPage };
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
    setSearchParams(params);
    if (currentPage === numberPage) {
      return;
    }
    setCurrentPage(numberPage);
    setFetching(true);
  };

  ////////////////////////////////////////////// mobile
  const handleScroll = ({ target }) => {
    const { scrollHeight, scrollTop } = target.documentElement;
    if (scrollHeight - (scrollTop + window.innerHeight) < 100) {
      // if (currentPage === totalPages) {
      //   return;
      // }
      !title
        ? setSearchParams({ page: currentPage + 1 })
        : setSearchParams({ title, page: currentPage + 1 });
      setFetching(true);
      console.log(window.innerWidth);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  /////////////////////////////

  const arrowHandleDecr = () => {
    if (currentPage === 1) {
      return;
    }
    setFetching(true);
    const params = { page: currentPage - 1 };
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
    setSearchParams(params);
    setCurrentPage(prev => prev - 1);
  };

  const arrowHandleIncr = () => {
    if (currentPage === totalPages) {
      return;
    }
    setFetching(true);
    const params = { page: currentPage + 1 };

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
    setSearchParams(params);
    setCurrentPage(prev => prev + 1);
  };

  return (
    !isUpToWidth480 && (
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
    )
  );
};

export default Pagination;
