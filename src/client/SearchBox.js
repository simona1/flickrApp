import React from 'react';
import {connect} from 'react-redux';
import {fetchPhoto} from './actions/index';
import {bindActionCreators} from 'redux';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ''};
  }

  _handleChange = event => {
    this.setState({
      keyword: event.target.value,
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    const {keyword} = this.state;
    this.props.fetchPhoto(keyword);
    this.setState({keyword: ''});
  };

  render() {
    const {keyword} = this.state;
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <input
            type="text"
            style={{
              borderColor: 'blue',
              backgroundColor: 'white',
              width: '500px',
            }}
            id="text"
            value={keyword}
            onChange={this._handleChange}
          />
          <button type="submit" className="btn btn-lg blue">
            search photos
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: keyword => dispatch(fetchPhoto(keyword)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
