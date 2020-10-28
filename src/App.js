import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import Chat from './components/Chat';
import store from './redux/chatStore';

const GlobalStyle = createGlobalStyle`
	body {
	background: rgb(247, 247, 247);
	font-family: sans-serif;
	height: 100vh;
	margin: 0;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 1em;
	}

	@media only screen and (max-width: 900px) {
		font-size: 0.6em;
	}

	@media only screen and (max-width: 500px) {
		font-size: 0.4em;
	}
`;

const AppWrapper = styled.div`
	display: grid;
	margin: 0;
	height: 100vh;
	place-items: center center;
`;

function App() {
	return (
		<AppWrapper>
			<GlobalStyle />
			<Provider store={store}>
				<Chat />
			</Provider>
		</AppWrapper>
	);
}

export default App;
