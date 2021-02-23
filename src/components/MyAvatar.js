import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import createAvatar from './createAvatar';
import MAvatar from './MAvatar';
import profilePic from 'assets/images/profile-image-placeholder.jpg'
import bk from 'assets/images/slide2.jpg'

// ----------------------------------------------------------------------

MyAvatar.propTypes = {
  className: PropTypes.string
};

function MyAvatar({ className, ...other }) {
  // const { auth, profile } = useSelector(state => state.firebase);
  const displayName = 'Byron Clarke' || 'Joe Bloggs'
  const photoURL = profilePic || bk;

  return (
    <MAvatar
      src={photoURL}
      alt={displayName}
      color={photoURL ? 'default' : createAvatar(displayName).color}
      className={className}
      {...other}
    >
      {createAvatar(displayName).name}
    </MAvatar>
  );
}

export default MyAvatar;
