import React, {
	Component
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import denoAction from '../Actions/denoAction';

export class App extends Component {

	constructor(props) {
		super(props);
		console.log('constructor');
		this.state = { count: 0 };
		this.increateCount = this.increateCount.bind(this);
	}

	static getDerivedStateFromProps() {
		console.log('getDerivedStateFromProps invoked');
		return null;
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate () invoked');
		return true;
	}

	componentDidMount() {
		console.log('componentDidMount () invoked');
	}

	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate () invoked');
		return null;
	}
	componentDidUpdate() {
		console.log('componentDidUpdate () invoked');
	}

	increateCount() {
		this.props.action.clickHandlerAction(this.state.count);
		this.setState({ count: (this.state.count) + 1 });
	}

	static getDerivedStateFromError() {
		console.log('getDerivedStateFromError');
	}
	componentDidCatch() {
		console.log('componentDidCatch () invoked');
	}
	render() {
		const { isMobile, data } = this.props;
		console.log('render () invoked', isMobile, data);
		return (<div>
			<h1> hello world </h1>
			<p>Count: {this.state.count} </p>
			<div><button type='submit' name='count' onClick={this.increateCount}>Submit </button></div>
			{/* <div>{this.state.count === 2 && <Deno />}</div> */}
		</div>);
	}

}
const mapDispatchToProps = dispatch => ({
	action: bindActionCreators(denoAction, dispatch),
});
export default connect(null, mapDispatchToProps)(App);