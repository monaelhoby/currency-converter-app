import React, { useEffect } from 'react';
import axios from "axios";
import './CurrencyContiener.css';
import {connect} from 'react-redux';
import * as actions from '../store/actions/actionsType';

const CurrencyContianer = props => {
  useEffect(  () => {
    axios
         .get(`http://www.apilayer.net/api/live?access_key=8352f6b41464220b277f44d698ea6a34&format=1`)
         .then(response => {
           const currencyArr = ['']
           for (let key in response.data.quotes) {
            let newkey = key.slice(3,6)
                    currencyArr.push({[newkey]:response.data.quotes[key]})
                }
                 props.setCurrensis(currencyArr);
         })
         .catch(err => {
                console.log("Opps", err.message);
            });
  }, [])
  const convertHandler = () => {
          if( props.fromValue !==  props.toValue){
          let fromcurrency =  props.currencies.filter(cur=>Object.keys(cur)[0]=== props.fromValue);
          let valueOfFromCurrency = fromcurrency[0][ props.fromValue];
          let tocurrency =  props.currencies.filter(cur=>Object.keys(cur)[0]=== props.toValue);
          let valueOfToCurrency = tocurrency[0][ props.toValue];
          let amount =  props.amount ;
          let result = amount * valueOfToCurrency / valueOfFromCurrency ;
            props.setResult(result.toFixed(5));
          } else {
           props.setResult({result:"You cant convert the same currency!"})
        }
};
  return (
  <div className="Converter">
      <div className="Form">
          <input
              name="amount"
              type="text"
              value={ props.amount}
              onChange={event => { props.setAmount(event.target.value)}}
              />
              <label>From</label>
          <select
              name="from"
              value={ props.fromValue}
              onChange={event => { props.setFromCurrensis(event.target.value)}}
              >
              {Object.keys( props.currencies).map(i=> (
                      <option key={i}>{Object.keys( props.currencies[i])}</option>
                  ))}
          </select>
              <label>To</label>
          <select
              name="to"
              value={ props.toValue}
              onChange={event => { props.setToCurrensis(event.target.value)}}
              >
              {Object.keys( props.currencies).map(i=> (
                      <option key={i}>{Object.keys( props.currencies[i])}</option>
                  ))}
          </select>
          <button onClick={() =>  convertHandler()}>Convert</button>
      </div>
      <div className="result">
    { props.result &&
          <h3>{ props.result}</h3>
      }
      </div>
  </div>
);
}

const mapStateToProperty=state=> ({
      amount:state.converter.amount ,
      fromValue:state.converter.fromCurrency ,
      currencies:state.converter.currencies ,
      toValue:state.converter.toCurrency ,
      result:state.converter.result
      });
const mapDispatchToProp=dispatch=>({
      setCurrensis:(currencies)=>dispatch({type:actions.SET_CURRENSIS,payload:{currencies}}) ,
      setAmount:(amount)=>dispatch({type:actions.AMOUNT_CURRENY,payload:{amount}}),
      setFromCurrensis:(fromCurrency)=>dispatch({type:actions.SELECT_FROM_CURRENY,payload:{fromCurrency}}) ,
      setToCurrensis:(toCurrency)=>dispatch({type:actions.SELECT_TO_CURRENY,payload:{toCurrency}}) ,
      setResult:(result)=>dispatch({type:actions.CONVERTER_ACTION,payload:{result}}),
      // convertHandler:() => dispatch ({type:actions.CONVERT_CURRENSIS})
    });
export default connect(mapStateToProperty,mapDispatchToProp)(CurrencyContianer);
