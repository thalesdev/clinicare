import React, { useContext } from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { AuthContext } from './context/AuthContex';
import Dashboard from './pages/dashboard';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

const Routes: React.FC = () => {
	const { auth, user } = useContext(AuthContext);


	return (
		<Router>
			{auth && <Redirect to="/dashboard" />}
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default Routes;