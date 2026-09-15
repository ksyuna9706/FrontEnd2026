import React from "react";
class Footer extends React.Component {
constructor(props){
    super(props);
  }

    render(){
        return (
        <footer style={{background:"rgba(255, 255, 255, 0.432)",width:"1920px",margin:"0 auto"}}>
            <p style={{paddingBottom:"50px",textAlign:"center",margin:"0"}}>{this.props.copy} </p>
            </footer>
    ) 
    }
   
}
export default Footer;