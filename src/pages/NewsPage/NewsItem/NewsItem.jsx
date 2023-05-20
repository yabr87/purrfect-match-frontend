import PropTypes from 'prop-types';

import { formatNewsDate } from 'utils/formatNewsDate';

import { Item, Img, Title, Text, Bottom, Link } from './NewsItem.styles';

const defaultUrl =
  'https://st.depositphotos.com/1032463/1373/i/950/depositphotos_13732950-stock-photo-background-of-old-vintage-newspapers.jpg';

const NewsItem = ({
  imgUrl = 'via.placeholder.com',
  title,
  text,
  date,
  url,
}) => {
  const newsDate = formatNewsDate(date);

  const handleLoadError = e => {
    e.currentTarget.src = defaultUrl;
  };

  return (
    <Item>
      <Img src={imgUrl} onError={handleLoadError} alt="Article theme" />
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
