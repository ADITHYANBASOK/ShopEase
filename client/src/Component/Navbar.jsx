import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">ShopEase</NavLink>
                        <div className="d-flex justify-content-center flex-grow-1">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active" className="nav-link" to="/">ALL</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/categories">Categories</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/cart">Cart</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" className="nav-link" to="/users">Users</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
