
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPageContainer from '../components/user/LandingPageContainer';
import CreateUserComponent from '../components/user/CreateUserComponent.jsx';

class AppRouter extends React.Component {
	render() {
		return (
			<Fragment>
				<BrowserRouter basename={'/'}>
					<Switch>
						<Route
							path='/'
							component={LandingPageContainer}
						/>

					</Switch>
				
				</BrowserRouter>
			</Fragment>

		);
	}
}


export default AppRouter;