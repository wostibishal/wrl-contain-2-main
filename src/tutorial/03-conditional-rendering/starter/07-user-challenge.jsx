import { useState } from 'react';

const UserChallenge = () => {
  const [User, setUser] = useState(null);
  const login = () => {
    setUser({ name: 'vegan food truck' });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="'btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please Login </h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
