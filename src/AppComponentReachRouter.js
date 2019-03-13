import { Router, Link } from "@reach/router";
import React from 'react';
import RouterParams from './RouterParams';

const Home = () => (
	<div>
		<h2>Welcome</h2>
	</div>
);

const Dashboard = () => (
	<div>
		<h2>Dashboard</h2>
	</div>
);

const routers = {
	'view': Home,
	'dash': Dashboard,
};

const App = ({portletNamespace}) => {
	return (
		<div>
			<h1>Senna.js with Reach Router</h1>
			<nav>
				<Link to={`?p_p_id=${portletNamespace}&p_p_view=view`} data-senna-off>Home</Link>
				<Link to={`?p_p_id=${portletNamespace}&p_p_view=dash`} data-senna-off>Dashboard</Link>
			</nav>
			<Router>
				<RouterParams path="*" routers={routers} />
			</Router>
		</div>
	);
};

export default App;