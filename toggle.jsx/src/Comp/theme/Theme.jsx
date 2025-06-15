// theme toggler
import React from "react"
class Theme extends React.Component{
    constructor(){
        super()
        this.state={
            isTheme:false
        }
    }
    handleTheme=()=>{
        this.setState({isTheme:!this.state.isTheme})
    }
    render(){
        return(
           <div
        style={{
          backgroundColor:this.state.isTheme ?"black":"white",
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <h1>{this.state.quote}</h1> */}
        <button onClick={this.handleTheme}>Theme Toggle</button>
      </div>
        )
    }
}
export default Theme