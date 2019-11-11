import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/user/actionCreators';
import { getUser } from '../store/user/selectors';
import Comments from './Comments';
import Posts from './Posts';

const User = ({ user, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const { name, username, email } = user;

  return (
    <div className="user">
      <h1>{name}</h1>

      <p>User name: {username}</p>
      <p>E-mail: {email}</p>

      <Comments/>
      <Posts/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: getUser(state)
});

const mapDispatchToProps = {
  fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
