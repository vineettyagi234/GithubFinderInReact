import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../Spinner';
import { Link } from 'react-router-dom';
import Repos from '../../repos/Repos';
import GithubContext from '../../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    website,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following,
    hireable,
    blog,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable: {}
      {hireable ? (
        <i className='fas fa-check text-sucess' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <h3>Location: {location}</h3>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>{login && <Fragment>Username: {name} </Fragment>}</li>
            <li>{login && <Fragment>Company: {company} </Fragment>}</li>
            <li>{login && <Fragment>Website: {blog} </Fragment>}</li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-dark'>Public Repos: {public_repos}</div>
        <div className='badge badge-light'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
