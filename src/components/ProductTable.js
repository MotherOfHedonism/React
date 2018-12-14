import React from 'react';
import ProductRow from './ProductRow';
import TypeRow from './TypeRow';
import EmptyRow from './EmptyRow';

  class ProductTable extends React.Component {
    render() {
      let rows = [];
      let lastType = null;
      
      this.props.products.forEach((product) => {
        if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.stockFlag)) {
          return;
        } else if (product.type !== lastType) {
          rows.push(<EmptyRow/>);
          rows.push(<TypeRow type={product.type} key={product.type} />);
        } 
        rows.push(<ProductRow product={product} key={product.name} />);
        lastType = product.type; 
      });
      
      return (
        <table>
          <thead>
            <tr>
              <th> Название </th>
              <th> Цена </th>
            </tr>
          </thead>
          <tbody> { rows } </tbody>
        </table>
      );
    }
  }

  export default ProductTable;