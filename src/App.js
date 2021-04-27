import React from 'react';
import { Balance } from './component/Balance';
import { Header } from './component/Header';
import { Incomeexpenses } from './component/Incomeexpenses';
import { History } from './component/History';
import { Addtransaction } from './component/Addtransaction';
import { GlobalProvider} from './context/Globalstate';
import './App.css' ;

function App() {
  return (
    <div className="main">
    <GlobalProvider >
      <Header/>
      <div className="cont">
        <Balance/>
        <Incomeexpenses/>
        <History/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
