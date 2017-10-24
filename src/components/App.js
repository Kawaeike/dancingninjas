import React from 'react';
import { Match, Miss } from 'react-router';

import Nav from './Nav';
import Main from './Main';
import NotFound from './NotFound';
import Snitchlist from './Snitchlist';
import Overwatch from './Overwatch';

class App extends React.Component {
	constructor() {
		super();

		this.test = this.test.bind(this);

		this.state = {

		};
	}

	test() {
		console.log('test');
	}

	render() {
		return (
			<div className="wrapper">
				<Nav />
				<Match exactly pattern="/" render={() => <Main test={this.test} />} />
				<Match exactly pattern="/Snitchlist" component={Snitchlist} />
				<Match exactly pattern="/Overwatch" component={Overwatch} />
				<Miss component={NotFound} />
			</div>
		)
	}
}

export default App;