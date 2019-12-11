
import {SET_CURRENSIS, CONVERTER_ACTION, SELECT_TO_CURRENY, 
        SELECT_FROM_CURRENY, AMOUNT_CURRENY, CONVERT_CURRENSIS} from './actionsType';

export const setCurrencies = (currencies) => {
   return {
    type:SET_CURRENSIS,
    payload:{currencies}
   }
};
export const setAmount = (amount) => {
   return {
    type:AMOUNT_CURRENY,
    payload:{amount}
   }
};
export const setFromCurrensis = (fromCurrency) => {
   return {
    type:SELECT_FROM_CURRENY,
    payload:{fromCurrency}
   }
};
export const setToCurrensis = (toCurrency) => {
   return {
    type:SELECT_TO_CURRENY,
    payload : {toCurrency}
   }
};
export const setResult = (result) => {
   return {
    type:CONVERTER_ACTION,
    payload:{result}
   }
};
export const convertHandler = () => {
   return {
    type:CONVERT_CURRENSIS,
   }
}