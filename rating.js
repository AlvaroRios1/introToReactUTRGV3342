'use strict';

//SEPERATE THE VIEW WITH THE LOGIC?
//REACT SAYS **** NO TO THAT WE WANT MODULAR CODE :D

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Star(props) {
	if (props.on) {
		return React.createElement("img", { src: "star.png", value: props.value, onClick: props.onClick });
	} else {
		return React.createElement("img", { src: "star-off.png", onClick: props.onClick });
	}
}

var Rating = function (_React$Component) {
	_inherits(Rating, _React$Component);

	function Rating(props) {
		_classCallCheck(this, Rating);

		var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

		_this.state = {
			stars: Array(10).fill(false),
			rating: 0
		};
		return _this;
	}

	_createClass(Rating, [{
		key: "handleClick",
		value: function handleClick(i) {
			//try to use const for immutably since its avoids edge cases that come from mutating original state values!
			var newStars;
			if (i == this.state.rating && i == 0) {
				newStars = Array(10).fill(false);
				newStars[i] = !this.state.stars[i];
			} else {
				newStars = [];
				var newOn = i;
				for (var j = 0; j < 10; j++) {
					if (newOn >= 0) {
						newStars.push(true);
						newOn--;
					}
				}
			}
			this.setState({
				stars: newStars,
				rating: i
			});
		}
	}, {
		key: "renderStar",
		value: function renderStar(i) {
			var _this2 = this;

			return React.createElement(Star, {
				value: i,
				on: this.state.stars[i],
				onClick: function onClick() {
					return _this2.handleClick(i);
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			var n = 10;
			var stars = [];
			for (var i = 0; i < n; i++) {
				//stars.push(<Star on={flip}/>);
				stars.push(this.renderStar(i));
			}
			return (
				//<Star on={true} onClick={handleClick()}/>
				React.createElement(
					"div",
					null,
					stars
				)
			);
		}
	}]);

	return Rating;
}(React.Component);

var container = document.querySelector('#container');
ReactDOM.render(React.createElement(Rating), container);

//npm init -y
//npm install babel-cli@6 babel-preset-react-app@3
//npx babel --watch src --out-dir . --presets react-app/prod