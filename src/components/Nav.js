import React from "react";
import styled from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1><a id="logo" href="#">capture.</a></h1>
            <ul>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <a href="#">Our Work</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
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