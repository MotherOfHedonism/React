import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainProductTable from './components/Main'

const colors = [
  {
    name: 'green',
    backgroundColor: '#39D1B4'
  },
  {
    name: 'yellow',
    backgroundColor: '#FFD712'
  },
  {
    name: 'purple',
    backgroundColor: '#ae848b'
  },
  {
    name: 'blue',
    backgroundColor: '#1E90FF'
  },
  {
    name: 'orchid',
    backgroundColor: '#DA70D6'
  }
];


var elements = [
  {type: 'продукты питания', price: '200 руб/кг', stocked: true, name: 'бананы'},
  {type: 'продукты питания', price: '100 руб/кг', stocked: true, name: 'морковь'},
  {type: 'продукты питания', price: '50 руб/кг', stocked: false, name: 'яблоки'},
  {type: 'напитки', price: '99 руб', stocked: true, name: 'чай'},
  {type: 'напитки', price: '200 руб', stocked: false, name: 'водка'},
  {type: 'игрушки', price: '2000 руб', stocked: true, name: 'самолётик'}
];




class App extends Component {
  render() {
		//const rand = 0 + Math.random() * (elements.length-1);
		const rand = Math.floor(Math.random() * (colors.length));
    var color= colors[rand].backgroundColor;
    return (
       <div className="App" >
       <Header bColor={color}/>
       <div>
       <MainProductTable products={elements}/>
       </div>
       <Footer title='Made in BSTU'/>
        </div>
    );
  }
}

export default App;