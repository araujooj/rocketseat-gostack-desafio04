import React from "react";

// import { Container } from './styles';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className = 'content'>{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}
function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>

        <span>{date}</span>
      </div>
    </div>
  );
}
function PostComments({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
export default PostItem;
