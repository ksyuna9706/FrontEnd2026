import React from "react";

class Footer extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
      let {text} = this.props;
      return(
        <footer style={{background: "blue", padding: "10px 0", fontWeight: "bold"}}>
        <p>{this.props.text}</p>
      </footer>
    )   
    }
   }
export default Footer;