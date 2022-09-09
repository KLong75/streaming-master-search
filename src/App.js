import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Search from './pages/SearchPage';
import SearchResults from './pages/SearchResults';
import SignUp from './pages/SignUp';
import TitleDetails from './pages/TitleDetails';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/home_page'
          element={<HomePage />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='/search_results'
          element={<SearchResults />}
        />
        <Route
          path='/title_details'
          element={<TitleDetails />}
        />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
