import React from "react";

class SignInUp extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignUp: false, // false = login by default
    };
  }

  toggleForm = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.isSignUp ? "Sign Up Successful!" : "Login Successful!");
  };

  render() {
    const { isSignUp } = this.state;

    return (
      <div
        style={{
          backgroundColor: "#f2f2f2",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>{isSignUp ? "Sign Up" : "Login"} Form</h2>

        <form
          onSubmit={this.handleSubmit}
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            width: "320px", // wider box
          }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              padding: "15px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              padding: "15px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          {isSignUp && (
            <input
              type="text"
              placeholder="Username"
              required
              style={{
                padding: "15px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          )}
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <button
          onClick={this.toggleForm}
          style={{
            marginTop: "20px",
            backgroundColor: "transparent",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            fontSize: "15px",
            textDecoration: "underline",
          }}
        >
          {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    );
  }
}

export default SignInUp;
