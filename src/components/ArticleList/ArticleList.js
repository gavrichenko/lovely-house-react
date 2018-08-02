import React, {Component} from 'react';
import Article from '../Article/Article'

export default class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  render() {

    return (
      <div className='articleList'>
        {Article}
      </div>
    )
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