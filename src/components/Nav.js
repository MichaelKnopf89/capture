import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">capture.</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/ourwork">Our Work</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    background: black;
    min-height  : 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    a{
        color: white;
        text-decoration: none;
        &:hover{
            color: #23d997;
        }
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.8rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
        letter-spacing: 0.2rem;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;