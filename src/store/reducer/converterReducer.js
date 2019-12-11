import * as actions from '../actions/actionsType';

const intialState={
  result: 0,
  fromCurrency: "USDUSD",
  toCurrency: "USDGBP",
  amount: 1,
  currencies: [],
};

const Reducer =  (state=intialState,action)=>{


  switch (action.type) {
    case actions.CONVERTER_ACTION:
          return {...state,result:action.payload.result}
      break;
    case actions.SELECT_TO_CURRENY:
          return {...state,toCurrency:action.payload.toCurrency}
      break;
    case actions.SELECT_FROM_CURRENY:
          return {...state,fromCurrency:action.payload.fromCurrency}
      break;
    case actions.AMOUNT_CURRENY:
          return {...state,amount:action.payload.amount}
      return state;
      break;
    case actions.SET_CURRENSIS:
      return {...state,currencies:action.payload.currencies}
      break;
    default:
      return state;

  }
}


export default  Reducer