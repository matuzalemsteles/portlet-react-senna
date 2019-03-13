import React from 'react';

const RouterParams = ({ routers: Routers }) => {
	let params = new URLSearchParams(window.location.search);
	let Route = Routers[params.get('p_p_view')];

	if (Route) {
		return <Route />
	}

	return null;
};

export default RouterParams;