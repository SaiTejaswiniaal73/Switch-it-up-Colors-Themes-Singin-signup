// import React from "react";
// import Child from "./Child";
// // random colour geertor program

// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       bgcolor: "#ffffff",
//     };
//   }

//   handlechangecolour = () => {
//     let chars = "abcdef0123456789";
//     // alert("hi colour")
//     let colourcode = "#";
//     for (let i = 0; i < 6; i++) {
//       const indexNum = Math.floor(Math.random() * chars.length);
//     // console.log(indexNum)
//     //   console.log(chars[indexNum])
//       colourcode += chars[indexNum];
//     }
//     this.setState({ bgcolor: colourcode });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: this.state.bgcolor,
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <button onClick={this.handlechangecolour}>Random colour</button>
//       </div>
//     );
//   }
// }

// export default App2;


// example 2
//random code generator


import React from "react";

class Quotes extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "click to get quote",
    };
  }

  handlechangequote = () => {
    const teluguQuotes = [
      "జీవితం ఓ పుస్తకం లాంటిది, ప్రతి రోజు ఓ కొత్త పేజీ.",
      "అవకాశం రాకపోతే, మీరు సృష్టించాలి.",
      "విజయం సాధించాలంటే కష్టపడటం తప్పనిసరి.",
      "నిన్నటి తప్పులు, నేటి పాఠాలు అవుతాయి.",
      "ఆలోచన మార్చితే, జీవితం మారుతుంది.",
      "పొరపాట్లు మనిషిని గొప్పవాడిగా చేస్తాయి.",
      "నమ్మకం ఉన్నవాడే విజేత.",
      "ప్రతి సమస్యకీ పరిష్కారం ఉంటుంది, ఓపిక అవసరం.",
      "అసలైన ధైర్యం అంటే భయాన్ని ఎదుర్కొనడం.",
      "పనితో నిబద్ధత ఉంటే ఫలితం తప్పదు."
    ];

    const randomIndex = Math.floor(Math.random() * teluguQuotes.length);
    const randomQuote = teluguQuotes[randomIndex];

    this.setState({ quote: randomQuote });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Segoe UI, sans-serif",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h1>{this.state.quote}</h1>
        <button
          onClick={this.handlechangequote}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Random Quote
        </button>
      </div>
    );
  }
}

export default Quotes;


// example 3
// theme toggler
// import React from "react"
// class App2 extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isTheme:false
//         }
//     }
//     handleTheme=()=>{
//         this.setState({isTheme:!this.state.isTheme})
//     }
//     render(){
//         return(
//            <div
//         style={{
//           backgroundColor:this.state.isTheme ?"black":"white",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <h1>{this.state.quote}</h1> */}
//         <button onClick={this.handleTheme}>Theme Toggle</button>
//       </div>
//         )
//     }
// }
// export default App2

// example 3
// theme toggler
// import React from "react"
// class App2 extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isTheme:false
//         }
//     }
//     handleTheme=()=>{
//         this.setState({isTheme:!this.state.isTheme})
//     }
//     render(){
//         return(
//            <div
//         style={{
//           backgroundColor:this.state.isTheme ?"black":"white",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <h1>{this.state.quote}</h1> */}
//         <button onClick={this.handleTheme}>Theme Toggle</button>
//       </div>
//         )
//     }
// }
// export default App2


// sign up fomr toggle

// signup form toggle

import React from "react";
class SignInUp extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
  }

  handleShowSignUp = () => {
    this.setState({isShow:!this.state.isShow})
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.isTheme ? "black" : "white",
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={this.handleShowSignUp}>signup</button>

        {this.state.isShow && (
          <form>
            <input />
          </form>
        )}
      </div>
    );
  }
}
export default SignInUp;



// import React, { Component } from 'react';
// import './App.css';  // Importing the CSS file


// class TabNavigation extends Component {
//   constructor() {
//     super();
//     this.state = {
//       activeTab: 'home'
//     };
//   }


//   setActiveTab = (tab) => {
//     this.setState({ activeTab: tab });
//   };


//   render() {
//     const { activeTab } = this.state;


//     return (
//       <div className="tab-container">
//         <div>
//           <div
//             className={`tab ${activeTab === 'home' ? 'active-tab' : ''}`}
//             onClick={() => this.setActiveTab('home')}
//           >
//             Home
//           </div>
//           <div
//             className={`tab ${activeTab === 'about' ? 'active-tab' : ''}`}
//             onClick={() => this.setActiveTab('about')}
//           >
//             About
//           </div>
//           <div
//             className={`tab ${activeTab === 'contact' ? 'active-tab' : ''}`}
//             onClick={() => this.setActiveTab('contact')}
//           >
//             Contact
//           </div>
//         </div>


//         <div className="content">
//           {activeTab === 'home' && <h3>Welcome to the Home Tab</h3>}
//           {activeTab === 'about' && <h3>About Us: We are awesome!</h3>}
//           {activeTab === 'contact' && <h3>Contact Us at: contact@company.com</h3>}
//         </div>
//       </div>
//     );
//   }
// }


// export default TabNavigation;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Comp/navbar/Navbar';
import Quotes from "./Comp/quotes/Quotes";
import SignInUp from "./Comp/sign/SignInUp";
import Theme from "./Comp/theme/Theme";
import Color from './Comp/color/Color';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/signInUp" element={<SignInUp />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/color/:id" element={<Color />} />
          <Route path="/theme/:id" element={<Theme />} />
        </Routes>
    </div>
  )
}

export default App
