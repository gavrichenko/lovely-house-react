import React from 'react';

export default function Comment({comment}) {
  return (
    <div className="commentBody">
      <p>
        {comment.text}
        <b>
          by {comment.user}
        </b>
      </p>
    </div>
  )
}