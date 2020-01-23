import React from 'react';
import { Link } from 'react-router';
import './Header.css';
import logo from '../images/logo.png';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = () => {
    return(
        <div className="Header">
            <div className="logo">
            <img src = {logo} id='logo' alt='logo'></img>
            <h3 id ='smu_likelion_qna'>SMU LIKELION_QNA</h3>
            </div>
            <div className='menu' id ='menu'>
                <MenuItem>Signup</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem to={'/question'} >QnA</MenuItem>
                <MenuItem to={'/notice'}>Notice</MenuItem>
            </div>
        </div>
    );
};

export default Header;
