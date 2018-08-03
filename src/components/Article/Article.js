import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Article.css'
import Comments from '../CommentList/CommentsList';

export default class Article extends Component {
  static propTypes = {
    articleData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  render() {
    const {articleData} = this.props;
    const {articleNumber} = this.props;
    const {isOpen} = this.props;
    const {toggleOpen} = this.props;

    return (
      <div className='articleComponent'>
        <h3 className = 'articleTitle'>{articleNumber} - { articleData.title } </h3>
        <button className='showArticleBtn' onClick = {toggleOpen} >
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {isOpen} = this.props;
    const {articleData} = this.props;

    if (!isOpen) {
      return null;
    }

    return (
    <section className='articleText'>{articleData.text}
      <Comments commentsData = {articleData.comments}/>
    </section>
    )
  }
}