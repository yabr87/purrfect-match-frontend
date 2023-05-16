import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ButtonPage, Flex, Box } from './Pagination.styles';
import Icon from 'shared/components/Icon';
import { getPetBySerch } from 'pages/NoticesPage/NoticesPage';
const Pagination = () => {
  // const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  // const [query, setQuery] = useState(title);
  const { categoryName } = useParams();

  //   const [pages, setPages] = useState([]);
  // const [totalPets, setTotalPets] = useState(0);

  const numberValue = page => Number(page);
  const pagesCount = Math.ceil(61 / 12);
  const pages =
    currentPage < 3
      ? Array.from({ length: 5 }, (_, index) => 1 + index)
      : Array.from({ length: 5 }, (_, index) => currentPage + index - 2);

  useEffect(() => {
    // if (!cards) {
    //   return;
    // }

    //тимчасове апі для пагінації
    getPetBySerch(categoryName, title, currentPage);
    //   setTotalPets(count);
  }, [currentPage, categoryName]);
  //   const getPetBySerch = async (title, category = 'sell') => {
  //     const { data } = await axios.get(
  //       'https://purrfect-match.onrender.com/api/notices',
  //       {
  //         params: {
  //           title,
  //           category,
  //         },
  //       }
  //     );
  //     return console.log(data);
  //   };

  // const pathDecr = () => {
  //           if (currentPage === 1) {
  //             return;
  //           }
  //           return `?category=${categoryName}&page=${currentPage - 1}`;
  //         };

  const handleClick = ({ target }) => {
    const numberPage = numberValue(target.id);
    setSearchParams({ title, page: numberPage });
    if (currentPage === numberPage) {
      return;
    }
    setCurrentPage(numberPage);
    console.log(title);
  };

  const arrowHandleDecr = () => {
    if (currentPage === 1) {
      return;
    }
    setSearchParams({ title, page: currentPage - 1 });
    setCurrentPage(prev => prev - 1);
  };

  const arrowHandleIncr = () => {
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
        {pagesCount > 5 && (
          <ButtonPage id="next" onClick={arrowHandleIncr} type="button">
            <Icon
              id="arrow-left"
              s="#54ADFF"
              f="#54ADFF"
              style={{ transform: 'rotate(180deg)' }}
            ></Icon>
          </ButtonPage>
        )}
      </Flex>
    </Box>
  );
};

export default Pagination;
