import React, { useContext } from 'react';
import {GlobalContext} from '../context/Globalstate';
import { Transaction } from './Transaction';

export const History = () => {

    const { transactions } = useContext(GlobalContext); 

    return (
        <div className="History">
            <div>
            <h4>HISTORY</h4>    
            <ul className="History">
                { transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                
            </ul>
            </div>

        </div>
    )
}
