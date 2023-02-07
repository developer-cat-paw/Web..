import { authService } from '../Firebase';
import React from 'react';
import { Navigate } from 'react-router-dom';
import profiles from '../profile2.png';
import setting from '../setting.png';
import './Profile.css';

const Profile = () => {
  //   const history = Navigate();
  const onLogOutClick = () => {
    authService.signOut()
    Navigate('/');
  };

  return (
    <>
      <div className='bg'></div>
      <img className='profiles' src={profiles}></img>
      <img className='setting' src={setting}></img>
      <input placeholder='Name' className='names'></input>
      <input placeholder='Introduction' className='int'></input>
      <button className='save'>Save</button>
      <button className='logout' onClick={onLogOutClick}>
        Log Out
      </button>
    </>
  );
};

export default Profile;