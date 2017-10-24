import React from 'react';

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			
		};
	}

	render() {
		return (
			<div>
				<div className="app-wrapper">
					<h2 className="app-heading">Willkommen auf der Dancing Ninjas Website</h2>
					<hr/>
					<span>Was kann man hier rein schreiben?</span>
					<br/>
					Next Steps:
					<ul>
						<li>Tabs (OW, CS?, Snitches)</li>
						<li>Firebase einloggen</li>
						<li>Gallerie / Media</li>
						<li>News</li>
					</ul>
					If u open this dont forget ur keyboard!!!
					<br/> 
					<button onClick={this.props.test}>hier</button>
				</div>
			</div>
		)
	}
}

export default Main;