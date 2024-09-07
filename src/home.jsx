import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header2 } from './containers';
import { CTA, Brand, Navbar2, Navbar } from './components';

import './home.css';

const Home = () => (
    <div className="home">
        {/*<div className="gradient__bg">*/}
        <div>
            <Navbar2 />
        </div>
        <div>
            <Header2 />
        </div>
    </div>
);

export default Home;