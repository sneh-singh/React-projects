import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './component/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
function App() {
  return ( 
	<Provider store={store}>
		<LoginPage /> 
	</Provider>
  );
}

export default App;