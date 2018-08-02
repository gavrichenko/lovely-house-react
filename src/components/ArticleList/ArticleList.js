import React from 'react';
import Article from '../Article/Article'

export default function ArticleList({articleData}) {

  const articleElements = articleData.map((el, index) => {
    return (
    <li key={el.id}>
      <Article articleData = {el} articleNumber = {index + 1}/>
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