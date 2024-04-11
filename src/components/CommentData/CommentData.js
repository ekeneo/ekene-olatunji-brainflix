import React from 'react';
import {useState} from 'react'
import './CommentData.scss';

const CommentData = ({commentData}) => {
  console.log({ commentData });
  
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  // Check if commentData.comments is undefined
  if (!commentData || !commentData.comments) {
    return <div>No comments available.</div>;
  }

  return (
    <section className="comment-container">
      {commentData.comments.map((comment) => {
        return (
          <article className="comments-list" key={comment.id}>
            <div className="comments-list__icon"></div>
            <div className="comments-list__group">
              <div className="comments-list__group2">
                <p className="comments-list__name">{comment.name}</p>
                <date className="comments-list__date">
                  {formatDate(comment.timestamp)}
                </date>
              </div>
              <div className="comments-list__comments">{comment.comment}</div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default CommentData;