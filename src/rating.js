'use strict';

//SEPERATE THE VIEW WITH THE LOGIC?
//REACT SAYS **** NO TO THAT WE WANT MODULAR CODE :D
class Star extends React.Component {
	constructor(props){
		super(props);
		this.state = { on: props.on };
	}

	handleClick(){
		this.setState({ on: !this.state.on });
	}

	render(){
		if (this.state.on){
			return (
				<img src="star.png" onClick={() => this.handleClick()}/>
			);
		} else{
			return (
				<img src="star-off.png" onClick={() => this.handleClick()}/>
			);
		}

	}
}

class Rating extends React.Component {
	render() {
		let n = 3000;
		let stars = [];
		var flip = false;
		for (var i = 0; i < n; i++){
			stars.push(<Star on={flip}/>);
			flip = !flip;
		}
		return (
			<div>
				{stars}
			</div>
		);
	}
}

const container = document.querySelector('#container');
ReactDOM.render(React.createElement(Rating), container);

//npm init -y
//npm install babel-cli@6 babel-preset-react-app@3
//npx babel --watch src --out-dir . --presets react-app/prod
