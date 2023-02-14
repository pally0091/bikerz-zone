import React from 'react';
import './Client.css';
import c1 from '../../images/user-1.png';
import c2 from '../../images/user-2.png';
import c3 from '../../images/user-3.png';


const Client = () => {
    return (
      <div>
        <h1>
          Happy <span>Clients says</span>
        </h1>
        <div id="client-container">
          <card>
            <div className="client-img">
              <img
                src={c1}
                alt=""
              ></img>
            </div>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year
            </p>
            <p className="clients-name">Regina Miles</p>
          </card>
          <card>
            <div className="client-img">
              <img
                src={c2}
                alt=""
              ></img>
            </div>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year
            </p>
            <p className="clients-name">Cristine</p>
          </card>
          <card>
            <div className="client-img">
              <img
                src={c3}
                alt=""
              ></img>
            </div>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year
            </p>
            <p className="clients-name">Mila Jordan</p>
          </card>
        </div>
      </div>
    );
};

export default Client;