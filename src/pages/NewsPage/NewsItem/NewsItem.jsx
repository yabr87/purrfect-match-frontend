import PropTypes from 'prop-types';

import { formatNewsDate } from 'utils/formatNewsDate';

import { Item, Img, Title, Text, Bottom, Link } from './NewsItem.styles';

const NewsItem = ({ imgUrl, title, text, date, url }) => {
  const newsDate = formatNewsDate(date);
  return (
    <Item>
      <Img src={imgUrl} alt="Frticle theme" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Bottom>
        <p>{newsDate}</p>
        <Link href={url} target="_blank" rel="noreferrer">
          Read more
        </Link>
      </Bottom>
    </Item>
  );
};

NewsItem.propTypes = {
  date: PropTypes.string,
  imgUrl: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default NewsItem;
