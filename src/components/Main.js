import React, { Component } from 'react';
import style from './Main.css'
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Test from "./Sections/Test";

const Main = () => {
    return (
        <>
            <a href="#main"><div className="home">Up!</div></a>
            <div className="main" id='main'>

                <ul className="main__ul">
                    <a href="#section2"><li className="main__list">W</li></a>
                    <a href="#section3"><li className="main__list">3</li></a>
                    <a href="#section4"><li className="main__list">C</li></a>
                </ul>


                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                
                {/* <Test /> */}

            </div>
        </>
    );
}

export default Main;