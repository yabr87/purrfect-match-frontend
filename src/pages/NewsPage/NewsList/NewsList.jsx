import PropTypes from 'prop-types';

import NewsItem from '../NewsItem';
import { List } from './NewsList.styles';

const NewsList = ({ items }) => {
  const elements = items.map(({ _id, ...props }) => (
    <NewsItem key={_id} {...props} />
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
