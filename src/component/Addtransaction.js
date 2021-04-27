import React, { useState , useContext } from 'react';
import {GlobalContext} from '../context/Globalstate';

export const Addtransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        addTransaction(newTransaction);
      }

    return (
        <>
       <form onSubmit={onSubmit}>
            <div className="Trans">
            
                <label htmlFor="text"> Text </label>
            <br/>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="enter text..." />
            </div>
            <div className="Trans">
                <label htmlFor="number">Amount(negative-expese,positive-income)</label>
                <br/>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
            </div>
                <button> ADD TRANSACTION </button>
        </form>
        </>
    )
}
