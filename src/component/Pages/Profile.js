import React from 'react';

function Profile({ params }) {
  return (
    <div>
      <h1>Welcome, {params.name}!</h1>
      <p>This is your profile page.</p>
    </div>
  );
}

export default Profile;
