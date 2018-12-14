 import React from 'react'

var style = {
  backgroundColor:"#d4d0d6",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%",
};

class Footer extends React.Component {
  render() {
    return (
      <div style={style} >
        <p>{this.props.title}</p>
      </div>
     
    );
  }
}

 export default Footer