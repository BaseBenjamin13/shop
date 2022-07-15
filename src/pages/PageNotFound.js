import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
        <div className="page-not-found-container">
            <h1>Sorry, Page Was Not Found</h1>
            <img className="not-found-img" src="https://i.imgur.com/N2w359S.png"></img>
            <h1>Want to go to <Link to="/">HomePage?</Link></h1>
            <h1>Want to <Link to="/login">Login?</Link></h1>
        </div>
    </div>
  )
}

export default PageNotFound