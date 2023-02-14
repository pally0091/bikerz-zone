import React from 'react';
import ducati from '../../images/bike-1.png';
import './NewsFeed.css';
import scooter from '../../images/bike-2.png';
import honda from '../../images/bike-3.png';

const NewsFeed = () => {
    return (
      <div>
        <h1>Latest News</h1>
        <div id="card-container">
          <card>
            <img
              src={ducati}
              alt=""
            ></img>
            <h3>Duacati XDIAVEL S-73</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
            <button>Read More</button>
          </card>
          <card>
            <img
              src={scooter}
              alt=""
            ></img>
            <h3>Motorcycles & Scooters</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
            <button>Read More</button>
          </card>
          <card>
            <img
              src={honda}
              alt=""
            ></img>
            <h3>2021 Honda CBR500R</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
              fermentum amet faucibus sed id nisi lectus at.
            </p>
            <button>Read More</button>
          </card>
        </div>
      </div>
    );
};

export default NewsFeed;