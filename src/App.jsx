import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/footer';
import FetchData from './components/FetchData';

const App = () => {
  return (

      <>
      
      <Router>
      <Navbar />
          <Routes>
              <Route exact path="" element={ <Home /> } />
              <Route exact path="/general" element={<FetchData cat="general" />} />
              <Route  path="/business" element={<FetchData cat="business" />} />
              <Route  path="/entertainment" element={<FetchData cat="entertainment" />} />
              <Route  path="/health" element={<FetchData cat="health" />} />
              <Route  path="/science" element={<FetchData cat="science" />} />
              <Route  path="/sports" element={<FetchData cat="sports" />} />
              <Route  path="/technology" element={<FetchData cat="technology" />} />
              </Routes>
      </Router>
        <Footer />
      </>
  )
}

export default App;

