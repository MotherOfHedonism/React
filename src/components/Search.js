import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
      this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
    handleInStockInputChange(e) {
      this.props.onInStockInput(e.target.checked);
    }
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Введите название товара..."
            value={this.props.filterText}
            onChange={this.handleFilterTextInputChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.stockFlag}
              onChange={this.handleInStockInputChange}
            />
            {' '}
           Только товары в наличии
          </p>
        </form>
      );
    }
  }

  export default Search;