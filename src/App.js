import React from 'react';
import './components/CurrencyContiener.css';
import CurrencyContianer from './components/CurrencyContiener';
import { Container } from 'reactstrap';
import './App.css';

const App = () => {
  return (
  <div className="parent">
  <Container>
    <h2><span>Currency </span> Converter <span role="img" aria-label="money">&#x1f4b5;</span> </h2>
    <CurrencyContianer/>
    </Container>
  </div>
)};
export default App;
