import PropTypes from 'prop-types';

import { Item } from './NewsItem.styles';
import { formatNewsDate } from 'utils/formatNewsDate';

const NewsItem = ({ imgUrl, title, text, date, url }) => {
  const newsDate = formatNewsDate(date);
  return (
    <Item>
      <img src={imgUrl} alt="Frticle theme" />
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{newsDate}</p>
      <a href={url}>Read more</a>
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
