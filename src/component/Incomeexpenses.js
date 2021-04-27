import React, { useContext } from 'react';
import {GlobalContext} from '../context/Globalstate';

export const Incomeexpenses = () => {
    const { transactions } = useContext(GlobalContext); 

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1 
  );

    return (
        <div className="incexp-cont">
            <div className="Income">
                <h4>INCOME</h4>
                <p className="plusmoney">{income}</p>
            </div>
            <div className="Expense">
                <h4>EXPENSE</h4>
                <p className="minusmoney">{expense}</p>
            </div>

        </div>
    )
}
