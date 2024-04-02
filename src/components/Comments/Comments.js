import videoData from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';
import React, { useState } from 'react';
import './Comments.scss';

// List of default comment entries
const commentEntries = [
  { name: 'Victor Pinto', comment: 'This is art...', date: '03/13/2024'},
  { name: 'Christina Cabrera', comment: 'I feel blessed...', date: '03/13/2024'},
  { name: 'Isaac Tedesse', comment: 'This is the first comment...', date: '03/13/2024'}
];


const Comments = () => {
  const [comments, setComments] = useState(commentEntries);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameVal = event.target.nameId.value;
    const commentVal = event.target.commentId.value;
    const dateVal = getCurrentDate();

    const newEntry = {
      name: nameVal,
      comment: commentVal,
      date: dateVal
    };

    setComments([...comments, newEntry]);
    event.target.reset();
  };

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="comments__Container">
      <h1 className="comments__heading">JOIN THE CONVERSATION</h1>
      <form className="comments-form" onSubmit={handleSubmit}>
        <input type="text" id="nameId" placeholder="Name" required />
        <textarea id="commentId" placeholder="Comment" required />
        <button type="submit">Submit</button>
      </form>
      <div className="comments">
        {comments.map((comment, index) => (
          <div key={index} className="comments-list">
            <div className="comments-list__icon"></div>
            <div className="comments-list__group">
              <div className="comments-list__group2">
                <p className="comments-list__name">{comment.name}</p>
                <date className="comments-list__date">{comment.date}</date>
              </div>
              <p className="comments-list__comment">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
