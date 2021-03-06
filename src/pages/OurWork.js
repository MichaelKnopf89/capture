import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import { pageAnim } from "../animation";

const OurWork = () => {
    return(
        <Work style={{background: "#fdfbfb"}} exit='exit' variants={pageAnim} initial='hidden' animate='show'>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="the-racer">
                    <img src={theracer} alt="the racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="good-times">
                    <img src={goodtimes} alt="good times" />
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork