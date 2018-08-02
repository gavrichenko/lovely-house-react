import React, {Component} from 'react';
import './Article.css'
import Comments from '../CommentList/CommentsList';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  render() {
    const {articleData} = this.props;
    const {articleNumber} = this.props;
    const {isOpen} = this.state;

    return (
      <div className='articleComponent'>
        <h3 className = 'articleTitle'>{articleNumber} - { articleData.title } </h3>
        <button className='showArticleBtn' onClick = {this.toggleOpen} >
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.state.isOpen) {
      return null;
    }
    const {articleData} = this.props;

    return (
    <section className='articleText'>{articleData.text}
      <Comments commentsData = {articleData.comments}/>
    </section>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

}

// export default function ArticleList(props) {
//   const {articleData} = props;
//
//   return (
//     <div>
//       <h3>{ articleData.title } </h3>
//       <section>{articleData.text}</section>
//     </div>
//   )
// }