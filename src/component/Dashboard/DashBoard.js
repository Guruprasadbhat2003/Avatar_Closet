

import React, { useState } from 'react';
import './DashBoard.css';


function Wishlist({ wishlistItems, handleRemoveFromWishlist }) {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map((item, index) => (
          <div key={index} className="wishlist-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <div className="wishlist-buttons">
              <button className="try-on-button">Try On</button>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromWishlist(index)}
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dashboard Component
function Dashboard({ userName, userEmail, profilePicture, wishlistItems, handleRemoveFromWishlist }) {
  return (
    <div className="dashboard">
      <header className="profile-section">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>{userName}</h1>
        <p>{userEmail}</p>
      </header>

      <div className="dashboard-content">
        <Wishlist wishlistItems={wishlistItems} handleRemoveFromWishlist={handleRemoveFromWishlist} />
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const userName = 'swati';
  const userEmail = '@email.com';
  const profilePicture = 'https://via.placeholder.com/150'; // Placeholder image for profile picture

  const initialWishlist = [
    { name: 'Red Jacket', image: 'https://via.placeholder.com/100x150?text=Red+Jacket' },
    { name: 'Blue Jeans', image: 'https://via.placeholder.com/100x150?text=Blue+Jeans' },
    { name: 'Black Shoes', image: 'https://via.placeholder.com/100x150?text=Black+Shoes' },
  ];

  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  // Handle remove from wishlist
  const handleRemoveFromWishlist = (indexToRemove) => {
    const updatedWishlist = wishlistItems.filter((_, index) => index !== indexToRemove);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="App">
      <Dashboard
        userName={userName}
        userEmail={userEmail}
        profilePicture={profilePicture}
        wishlistItems={wishlistItems}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
      />
    </div>
  );
}

export default App;
