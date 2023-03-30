import React from 'react';
import { FaEquals } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';
import amazingViews from './images/amzng.jpg';
import omg from './images/omg.jpg';
import beach from './images/beach.jpg';
import cabins from './images/cabins.jpg';
import camp from './images/camp.jpg';
import castles from './images/castles.jpg';
import country from './images/country.jpg';
import creative from './images/creative.jpg';
import domes from './images/domes.jpg';
import earth from './images/earth.jpg';
import iconic from './images/iconic.jpg';
import island from './images/island.jpg';
import luxe from './images/luxe.jpg';
import mansion from './images/mansion.jpg';
import './style.css';

const Options = () => {
  const optionPics = [
    {
      name: 'Amazing views',
      src: amazingViews,
    },
    {
      name: 'OMG!',
      src: omg,
      link: '/omg'
    },
    {
      name: 'Beach',
      src: beach ,
    },
    {
      name: 'Cabin',
      src: cabins ,
    },
    {
      name: 'Camping',
      src: camp ,
    },
    {
      name: 'Castles',
      src: castles ,
    },
    {
      name: 'Country',
      src: country ,
    },
    {
      name: 'Creative space',
      src: creative ,
    },
    {
      name: 'Domes',
      src: domes ,
    },
    {
      name: 'Earth homes',
      src: earth ,
    },
    {
      name: 'Iconic cities',
      src: iconic ,
    },
    {
      name: 'Islands',
      src: island ,
    },
    {
      name: 'Luxury',
      src: luxe ,
    },
    {
      name: 'Mansions',
      src: mansion ,
    },
  ];

  return (
    <div className="option-container">
      {optionPics.map((pic) => (
        <a href={pic.link} className="option-item" key={pic.src}>
          <img src={pic.src} alt={pic.name} />
          <div className="optiontxt">{pic.name}</div>
        </a>
      ))}
      <div className="option-more">
        <i>
          <BiChevronRight />
        </i>
      </div>
      <div className="option-box">
        <i className="option-icon">
          <FaEquals />
        </i>
        <h2 className="option-txt">Filter</h2>
      </div>
    </div>
  );
};

export default Options;
