import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addSearchTags, removeSearchTags, durationChange} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addSearchTags: tag => dispatch(addSearchTags(tag)),
  removeSearchTags: tag => dispatch(removeSearchTags(tag)),
  durationChange: (type, value) => dispatch(durationChange({type, value})),  
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
