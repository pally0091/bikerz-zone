import React, { useState } from 'react';
import './Accordian.css';

const Accordian = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
      <div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={handleAccordion}
          >
            What are the most important things I should know about riding a
            bike?
            <span className={`icon ${isOpen ? "rotate" : ""}`}>&#x25B2;</span>
          </div>
          {isOpen && (
            <div className="accordion-content">
              Safety First! Always obey the rules of the road. Obey all traffic
              signals, signs, and laws. Get in the mindset of “driving” your
              bike—not just “riding” your bike. This will help you be a more
              focused and legally compliant bike rider.{" "}
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={handleAccordion}
          >
            How can I tell if my helmet is old and I need a new one?
            <span className={`icon ${isOpen ? "rotate" : ""}`}>&#x25B2;</span>
          </div>
          {isOpen && (
            <div className="accordion-content">
              Safety First! Always obey the rules of the road. Obey all traffic
              signals, signs, and laws. Get in the mindset of “driving” your
              bike—not just “riding” your bike. This will help you be a more
              focused and legally compliant bike rider.{" "}
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={handleAccordion}
          >
            My bike has been in storage is it safe to ride?
            <span className={`icon ${isOpen ? "rotate" : ""}`}>&#x25B2;</span>
          </div>
          {isOpen && (
            <div className="accordion-content">
              Safety First! Always obey the rules of the road. Obey all traffic
              signals, signs, and laws. Get in the mindset of “driving” your
              bike—not just “riding” your bike. This will help you be a more
              focused and legally compliant bike rider.{" "}
            </div>
          )}
        </div>
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={handleAccordion}
          >
            What rules should I follow when riding my bike?
            <span className={`icon ${isOpen ? "rotate" : ""}`}>&#x25B2;</span>
          </div>
          {isOpen && (
            <div className="accordion-content">
              Safety First! Always obey the rules of the road. Obey all traffic
              signals, signs, and laws. Get in the mindset of “driving” your
              bike—not just “riding” your bike. This will help you be a more
              focused and legally compliant bike rider.{" "}
            </div>
          )}
        </div>
      </div>
    );
};

export default Accordian;