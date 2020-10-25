import React from 'react';
import { Provider, useSelector } from 'react-redux';

import './App.css';
import Chat from './components/Chat';
import store from './redux/chatStore';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Chat />
			</Provider>
		</div>
	);
}

export default App;
