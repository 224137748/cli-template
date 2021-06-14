import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './app/globalSlice'
import {RootState} from './app/store'
import logo from './logo.svg';
import Hello from './Hello'
import './App.css';

function App() {
  const count = useSelector((state:RootState) => state.global.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <div>
      <div>
        <h4>redux</h4>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          增加
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          减少
        </button>
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
