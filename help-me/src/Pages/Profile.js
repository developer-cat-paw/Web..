import { authService } from '../Firebase';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
//   const history = Navigate();
  const onLogOutClick = () => {
    authService.signOut()
    Navigate('/');
  };
  
  return (
    <>
      <button onClick={onLogOutClick}>
        Log Out
      </button>
    </>
  );
};

export default Profile;