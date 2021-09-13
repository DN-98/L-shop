import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light px-sm-5">
                <div className="container-fluid">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" width="50" height="60" />
                </Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item ms-5">
                        <Link to='/' className="nav-link link-secondary">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item ms-5">
                        <Link to='/faq' className="nav-link link-secondary">
                            FAQ
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="">
                    <ButtonContainer className="nav-link link-secondary">
                        <span className="me-2">
                            <i className="fas fa-cart-plus"></i>    
                        </span> 
                        MY CART
                    </ButtonContainer>
                </Link>
                </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;