import React from 'react';
import ProductTable from './ProductTable';
import Search from './Search'
  
  var style={
    "marginLeft":"43%"
   };
  
  class MainProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = { filterText: '',  stockFlag: false };
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
      this.handleInStockInput = this.handleInStockInput.bind(this);
    }
    handleFilterTextInput(filterText) {
      this.setState({ filterText: filterText });
    }  
    handleInStockInput(stockFlag) {
      this.setState({ stockFlag: stockFlag })
    } 
    render() {
      return (
        <div>
          <Search
            filterText={ this.state.filterText }
            stockFlag={ this.state.stockFlag }
            onFilterTextInput={ this.handleFilterTextInput }
            onInStockInput={ this.handleInStockInput }
          />
          <div style={style}>
          <ProductTable 
            products={ this.props.products }
            filterText={ this.state.filterText }
            stockFlag={ this.state.stockFlag }
          />
          </div>
        </div>
      );
    }
  }
  

  export default MainProductTable;