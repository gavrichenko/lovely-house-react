import React, {Component} from 'react';
import Article from '../Article/Article'

export default class ArticleList extends Component  {
  state = {
    openArticleId: null
  };

  render() {
    const articleElements = this.props.articleData.map((el, index) => {
      return (
        <li key={el.id}>
          <Article
            articleData={el}
            articleNumber={index + 1}
            isOpen = {el.id === this.state.openArticleId}
            toggleOpen = {this.toggleOpenArticle(el.id)}
          />
        </li>
      )
    });

    return (
      <div className="articleListComponent">
        <ul>
          {articleElements}
        </ul>
      </div>
    )
  }

  toggleOpenArticle = openArticleId => () => {
    if (openArticleId === this.state.openArticleId) {
      return this.setState({openArticleId: null});
    }
    return this.setState({openArticleId});
  }
}