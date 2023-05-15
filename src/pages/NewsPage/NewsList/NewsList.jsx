import PropTypes from 'prop-types';

import NewsItem from '../NewsItem';
import { List } from './NewsList.styles';

const NewsList = ({ items }) => {
  const elements = items.map(({ id, ...props }) => (
    <NewsItem key={id} {...props} />
  ));

  return <List>{elements}</List>;
};

NewsList.defaultProps = {
  items: [],
};

NewsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default NewsList;
