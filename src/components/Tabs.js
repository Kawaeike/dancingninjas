import React from 'react';
import logo from '../gfx/logo.png';
import { Icon } from 'react-fa';

class Tabs extends React.Component {
	render() {
		return (
			<ul>
				<li className="logo">
					<figure>
						<img src={logo} alt="Dancing Ninjas" className="nav-logo" />
					</figure>
				</li>
				<li>
					<h1>
						DANCING NINJAS
					</h1>
				</li>
				<li className="flex-account">
					<button className="nav-button account" title="Account">
						<Icon name="user" size="2x" />
					</button>
				</li>
			</ul>
		)
	}
}

export default Tabs;