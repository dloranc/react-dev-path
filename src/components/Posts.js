import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/posts/selectors';


const Posts = ({ posts }) => {
  return (
    <div className="posts">
      <h2>User posts</h2>

      <div className="posts__list">
        {posts.map(post => <p key={post.id}>{post.title}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: getPosts(state)
});

export default connect(mapStateToProps)(Posts);
