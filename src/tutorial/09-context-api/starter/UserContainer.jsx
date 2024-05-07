import React from 'react';
import { useContext } from 'react';
import { NavbarContext } from './Navbar';

const UserContainer = () => {

const {user, logout} = useContext(NavbarContext);
  
  return (
    <div className="user-container">
      {user?(
        <>
        <p>hello there, {user?.name?.toUpperCase()}</p>
      
      <button className="btn" onClick={logout}>
        logout
      </button>
        </>
      ):(
      <p> please login</p>
      )}
      
    </div>
  );
};

export default UserContainer;
