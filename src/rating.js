'use strict';
//SEPERATE THE VIEW WITH THE LOGIC?
//REACT SAYS **** NO TO THAT WE WANT MODULAR CODE :D
function Star(props) {
    if (props.on) {
      return (
        <img src="star.png" value={props.value} onClick={props.onClick}/>
      );
    } else {
      return (
        <img src="star-off.png" onClick={props.onClick}/>
      );
    }
  }


class Rating extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
			stars: Array(10).fill(false),
			rating: 0, 
		};
	}
	handleClick(i){
		//try to use const for immutably since its avoids edge cases that come from mutating original state values!
		var newStars;
		if (i == this.state.rating && i == 0){
			newStars = Array(10).fill(false);
			newStars[i] = !this.state.stars[i];
		}
		else {
			newStars = [];
			var newOn = i;
			for (var j = 0; j < 10; j++){
				if (newOn >= 0){
					newStars.push(true);
					newOn--;
				}
			}
		}
		this.setState({
			stars: newStars,
			rating: i,
		});

	}

	renderStar(i) {
	    return (
	      <Star
	      	value={i}
	        on={this.state.stars[i]}
	        onClick={() => this.handleClick(i)}
	      />
	    );
	  }

	render() {
		let n = 10;
		let stars = [];
		for (var i = 0; i < n; i++){
			//stars.push(<Star on={flip}/>);
			stars.push(this.renderStar(i));
		}
		return (
			//<Star on={true} onClick={handleClick()}/>
			<div>
				{stars}
			</div>
		);
	}
}

class Professor extends React.Component {
	render () {
		return(
			<div>
				<h3 >{this.props.name}</h3>
				<Rating />
				<h1>------------------------------</h1>
			</div>
		);
	}
}

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			profs: 0,
			profNames: ["Professor0"],
		};
	}
	addProf(){
		const newProf = this.state.profs + 1;
		var nameGen = "newProfessor" + newProf.toString();
		const profExtend = this.state.profNames.concat([nameGen]);
		this.setState({
			profs: newProf,
			profNames: profExtend,
		});
	}
	removeProf(){
		const newProf = this.state.profs - 1;
		const profLess = this.state.profNames.slice(0, this.state.profNames.length - 1);
		if (this.state.profs == 0){
			return;
		}
		this.setState({
			profs: newProf,
			profNames: profLess,
		});
	}

	render () {
		var profRender = [];
		this.state.profNames.forEach((value, index) => {
			profRender.push(<li><Professor name={value}/></li>);
		})
		return(
			<div>
				<button onClick={() => this.addProf()}>Add more profs</button>
				<button onClick={() => this.removeProf()}>Remove profs</button>
				<ul>
					{profRender}
				</ul>
			</div>
		);
	}
}

const container = document.querySelector('#container');
ReactDOM.render(React.createElement(List), container);

//npm init -y
//npm install babel-cli@6 babel-preset-react-app@3
//npx babel --watch src --out-dir . --presets react-app/prod
