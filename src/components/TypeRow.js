import React from 'react';

class TypeRow extends React.Component {
    render() {
      return ( <tr><th colSpan="2"> { this.props.type } </th></tr> );
    }
  }
  
  export default TypeRow;