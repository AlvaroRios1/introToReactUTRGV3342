'use strict';

//SEPERATE THE VIEW WITH THE LOGIC?
//REACT SAYS **** NO TO THAT WE WANT MODULAR CODE :D

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_React$Component) {
	_inherits(Star, _React$Component);

	function Star(props) {
		_classCallCheck(this, Star);

		var _this = _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, props));

		_this.state = { on: props.on };
		return _this;
	}

	_createClass(Star, [{
		key: "handleClick",
		value: function handleClick() {
			this.setState({ on: !this.state.on });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			if (this.state.on) {
				return React.createElement("img", { src: "star.png", onClick: function onClick() {
						return _this2.handleClick();
					} });
			} else {
				return React.createElement("img", { src: "star-off.png", onClick: function onClick() {
						return _this2.handleClick();
					} });
			}
		}
	}]);

	return Star;
}(React.Component);

var Rating = function (_React$Component2) {
	_inherits(Rating, _React$Component2);

	function Rating() {
		_classCallCheck(this, Rating);

		return _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).apply(this, arguments));
	}

	_createClass(Rating, [{
		key: "render",
		value: function render() {
			var n = 3000;
			var stars = [];
			var flip = false;
			for (var i = 0; i < n; i++) {
				stars.push(React.createElement(Star, { on: flip }));
				flip = !flip;
			}
			return React.createElement(
				"div",
				null,
				stars
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