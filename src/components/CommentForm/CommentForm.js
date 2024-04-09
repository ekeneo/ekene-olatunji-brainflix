import React, { useState, useEffect } from 'react';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';
import './CommentForm.scss';

const CommentForm = ({ addComment, commentData }) => {
  const [commentValue, setCommentValue] = useState('');

  // Function to handle adding a new comment
  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentValue.trim() !== '') {
      addComment(commentValue);
      setCommentValue('');
    }
  };

  // Calculate the number of comments
  // const commentCount = commentData.length;
  const commentCount = commentData?.length ?? 3;


  return (
    <section className='comment-form'>
      <div className='comment-form__comment-counter'>
        {/* Comment counter */}
        
        {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
      </div>
      <div className='comment-form__container'>
        <div className='comment-form__user'>
          <img
            src={userIcon}
            alt="User Icon"
            className="comment-form__user-icon"
          />
        </div>
        <div>
          <p className='comment-form__heading'>JOIN THE CONVERSATION</p>
          <div className='comment-form__group'>
            <form onSubmit={handleSubmit}>
              <textarea
                className='comment-form__textarea'
                type="text"
                name="addComment"
                placeholder="Add a new comment"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              ></textarea>
            </form>
            <button className='comment-form__button' type="submit">COMMENT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentForm;




// Comment Form
// formEl.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const nameVal = event.target.nameId.value;
//   const commentVal = event.target.commentId.value;

//   const newEntry = {
//     name: nameVal,
//     comment: commentVal,
//     // timestamp: timestamp
//   };


//   try {
//     // sending the user entered comment data to a createComment method
//     const newCommentData = await bandSiteApi.createComment(newEntry);
//     console.log('New comment success: ', newCommentData);

//     // re-fetch our albums and re-render the album elements after successful album creation
//     getComments();
//   } catch(error) {
//     formEl.innerText = "Sorry, we couldn't create a new comment";
//   }

//   // Clear all form fields from the form after submitting
//   event.target.reset();

// });

// getComments();

