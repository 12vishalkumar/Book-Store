//************************ Importing Required Libararies ***********************
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';


//**************************** Render Function ***********************************
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
