import React from 'react';

import '../../assets/style/user/ProfilePage.css';

function Profile() {
  return (
    <div className="profile">
        <div className="user-info-container">
            <h1>Welcome 'username here'</h1>
        </div>
        <div className="help-container">
            <button>Order History</button>
            <button>Wishlist</button>
            <button>Customer Support</button>
            <button>Login Security</button>
        </div>
    </div>
  )
}

export default Profile