import React from 'react';
import './FAQ.css';
import faq from '../../images/faq.png';
import Accordian from './Accordian';

const FAQ = () => {
    return (
        <div id='faq'>
            <h1>Frequently Asked <span>Questions</span></h1>
            <div id='faq-container'>
                <div id='faq-img'>
                    <img src={faq} alt=''></img>
                </div>
                <div id='accor'>
                    <Accordian></Accordian>
                </div>

            </div>
        </div>
    );
};

export default FAQ;