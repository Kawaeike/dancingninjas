import React from 'react';

class NavBarBtn extends React.Component {
	render() {
		console.log(this.props);
		let className = 'navbar-btn';
		if (this.props.currentNavbarItemKey === this.props.navbarItem.key) {
			className += ' navbar-btn-active';
		}
		return (
			<li className="tabs">
				<button className={className}> </button>
			</li>
		)
	}
}

export default NavBarBtn;