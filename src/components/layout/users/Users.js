import React, { useContext } from 'react';
import Useritem from './UserItem';
import Spinner from '../Spinner.js';
import GithubContext from '../../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users && users.map((user) => <Useritem key={user.id} user={user} />)}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3 , 1fr)',
  gridGap: '1rem',
};

export default Users;
