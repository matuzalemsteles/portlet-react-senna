
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { LocationProvider, createHistory } from "@reach/router";
import { Router } from "react-router";

import AppComponentReachRouter from './AppComponentReachRouter';
import AppComponentReactRouter from './AppComponentReactRouter';

const history = createHistory(Liferay.SPA.unstable_history.ReachRouter);

const AppContainerReachRouter = (props) => (
    <LocationProvider history={history}>
        <AppComponentReachRouter {...props} />
    </LocationProvider>
);

const AppContainerReactRouter = (props) => (
    <Router history={Liferay.SPA.unstable_history.ReactRouter}>
        <AppComponentReactRouter {...props} />
    </Router>
);

const Container = (props) => (
    <React.Fragment>
        <AppContainerReachRouter {...props} />
        <AppContainerReactRouter {...props} />
    </React.Fragment>
);

/**
 * This is the main entry point of the portlet. It receives a hash of values
 * describing the context of execution. The values are:
 *
 *   - portletElementId:
 *   		The id of the DOM node which acts as a container for the portlet.
 *   		Usually you will want to attach any generated HTML code to this
 * 			node.
 *
 *   - portletNamespace:
 *   		Portlet namespace, which is the unique identifier for this portlet
 *   		instance.
 *
 *   - contextPath:
 *   		The absolute path portion to this module's resources. It starts with
 *   		'/' and doesn't contain the protocol, host, port or authentication
 *   		values. Just the path.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
function main(props) {
    ReactDOM.render(
        <Container {...props} />,
        document.getElementById(props.portletElementId)
    );
}

export default main;