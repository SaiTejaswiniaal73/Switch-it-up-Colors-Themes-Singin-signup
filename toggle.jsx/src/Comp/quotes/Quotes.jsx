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
          backgroundColor: "skyblue",
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