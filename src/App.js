import React from 'react';
import Header from './comps/Header';
import Balance from './comps/Balance';
import IncomeExpenses from './comps/IncomeExpenses';
import TransactionList from './comps/TransactionList';
import AddTransaction from './comps/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
