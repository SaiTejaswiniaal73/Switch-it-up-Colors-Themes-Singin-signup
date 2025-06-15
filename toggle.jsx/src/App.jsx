import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Comp/navbar/Navbar';
import Quotes from "./Comp/quotes/Quotes";
import SignInUp from "./Comp/sign/SignInUp";
import Theme from "./Comp/theme/Theme";
import Color from './Comp/color/Color';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/signInUp" element={<SignInUp />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/theme/:id" element={<Theme />} />
          <Route path="/color/:id" element={<Color />} />
        </Routes>
      </div>
    );
  }
}

export default App;
