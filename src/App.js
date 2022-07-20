import React, { useState, useContext } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Monitors from './pages/monitors/Monitors';
import MonitorDetail from './pages/monitors/MonitorDetail';

import KeyBoards from './pages/keyboards/KeyBoards';
import KeyBoardDetail from './pages/keyboards/KeyBoardDetail';

import Mouses from './pages/mouses/Mouses';
import MouseDetail from './pages/mouses/MouseDetail';

import HeadPhones from './pages/headphones/HeadPhones';
import HeadPhoneDetail from './pages/headphones/HeadPhoneDetail';

import Login from './pages/user/Login';
import Register from './pages/user/Register';
import UsersReviews from './pages/UsersReviews';
import Profile from './pages/user/Profile';
import WishLists from './pages/user/wishlists/WishLists';
import CartPage from './pages/user/cart/CartPage';
import OrderHistory from './pages/user/OrderHistory';

import { UserContext, UserProvider } from './contexts/UserState';

import PageNotFound from './pages/PageNotFound';

function App() {

    return (
        <div className="App">
        <UserProvider >
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/monitors" element={<Monitors />} />
                <Route path="/monitors/:id" element={<MonitorDetail />} />

                <Route path="/keyboards" element={<KeyBoards />} />
                <Route path="/keyboards/:id" element={<KeyBoardDetail />} />

                <Route path="/mouses" element={<Mouses />} />
                <Route path="/mouses/:id" element={<MouseDetail />} />

                <Route path="/headphones" element={<HeadPhones />} />
                <Route path="/headphones/:id" element={<HeadPhoneDetail />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/user/reviews" element={<UsersReviews />} />
                <Route path="/user/wishlists" element={<WishLists />} />
                <Route path="/user/cart" element={<CartPage />} />
                <Route path="/user/orders" element={<OrderHistory />} />

                <Route path="*" element={<PageNotFound />} />
                
            </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
