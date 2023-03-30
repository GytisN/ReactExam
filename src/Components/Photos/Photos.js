import React from 'react'
import "./style.css"; 

const Photos = (props) => {
  return (
    <div className="photo-size">
        <img className="main-container" src={props.img} alt='flat'/>

    </div>
    
  )
}

export default Photos;


// import React from 'react';
// import './style.css';

// const Photos = ({ img, name, description, price }) => {
//   return (
//     <div className="photo-container">
//       <img src={img} alt={title} />
//       <div className="photo-details">
//         <h2>{name}</h2>
//         <p>{description}</p>
//         <p>Price: {price}</p>
//       </div>
//     </div>
//   );
// };

// export default Photos;
