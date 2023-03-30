
// import './App.css';
// import Main from './Components/Main/Main';
// import Header from './Components/Header/Header';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import Footer from './Components/Footer/Footer';
// import Options from './Components/Options/Options';

// library.add(faSearch, faHeart, faUser);


// function App() {
//   return (
//     <>
//       <Header />
//       <Options />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';
import Home from './Components/Pages/Home';
import Privacy from './Components/Pages/Privacy';
import Omg from './Components/Pages/Omg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/omg" element={<Omg />} />
      </Routes>
    </Router>
  );
}

export default App;

