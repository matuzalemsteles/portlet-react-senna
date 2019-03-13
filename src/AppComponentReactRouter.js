import { Route, Link } from "react-router-dom";
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
			<h1>Senna.js with <b>React Router</b></h1>
			<nav>
				<Link to={{ search: `?p_p_id=${portletNamespace}&p_p_view=view` }} data-senna-off>Home</Link>
				<Link to={{ search: `?p_p_id=${portletNamespace}&p_p_view=dash` }} data-senna-off>Dashboard</Link>
			</nav>

			<Route path="*" render={() => <RouterParams routers={routers} />} />
		</div>
	);
};

export default App;