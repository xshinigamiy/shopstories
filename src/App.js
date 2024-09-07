import React from 'react';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header2 } from './containers';
import { CTA, Brand, Navbar2, Navbar } from './components';

import './App.css';
import Home from "./home";
import Expert from "./components/book an expert/expert";

const App = () => (
    <>
        <Home />
        {/*<Routes>*/}
        {/*    <Route path="/home" element={<Home />} />*/}
        {/*    <Route path="/expert" element={<Expert />} /> #TODO: create expertpage componet*/}
        {/*</Routes>*/}
    </>
);

// <div className="App">
//   {/*<div className="gradient__bg">*/}
//     <div>
//         <Navbar2 />
//     </div>
//     <div>
//         <Header2 />
//     </div>
{/*<Brand />*/}
{/*<WhatGPT3 />*/}
{/*<Features />*/}
{/*<Possibility />*/}
{/*<CTA />*/}
{/*<Blog />*/}
{/*<Footer />*/}
// </div>

export default App;