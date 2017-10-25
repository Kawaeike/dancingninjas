import React from 'react';
import logo from '../gfx/logo.png';
import { Icon } from 'react-fa';
import NavBarBtn from './NavBarBtn';

class Nav extends React.Component {
	render() {
		return (
			<div className="nav">
				<ul>
					<li className="logo">
						<figure>
							<img src={logo} alt="Dancing Ninjas" className="nav-logo" />
						</figure>
					</li>
					<li>
						<h1 title="">
							DANCING NINJAS
						</h1>
					</li>
					<li className="account">
						<button title="Account">
							<Icon name="user" size="2x" />
						</button>
					</li>
				</ul>
			</div>
		)
	}
}

export default Nav;