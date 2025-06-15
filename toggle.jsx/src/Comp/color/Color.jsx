import React from "react";
class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      bgcolor: "#ffffff",
    };
  }

  handlechangecolour = () => {
    let chars = "abcdef0123456789";
    // alert("hi colour")
    let colourcode = "#";
    for (let i = 0; i < 6; i++) {
      const indexNum = Math.floor(Math.random() * chars.length);
    // console.log(indexNum)
    //   console.log(chars[indexNum])
      colourcode += chars[indexNum];
    }
    this.setState({ bgcolor: colourcode });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.bgcolor,
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={this.handlechangecolour}>Random colour</button>
      </div>
    );
  }
}

export default Color;