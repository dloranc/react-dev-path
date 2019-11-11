import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../store/comments/selectors';


const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>User comments</h2>

      <div className="comments__list">
        {comments.map(post => <p key={post.id}>{post.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

export default connect(mapStateToProps)(Comments);
