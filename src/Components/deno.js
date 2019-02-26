import React, {
	Component
} from 'react';
import { clickHandler } from '../Actions/denoAction'

export default class deno extends Component {
	
	constructor(props) {
		super(props);
		console.log('Child component constracture');
	this.state = { book: { name: 'raj' } };
	this.onClickHandler = this.onClickHandler.bind(this);
    }
    static getDerivedStateFromProps(){
		// throw new Error("this is not an error")
		console.log('Child component getDerivedStateFromProps');
				}
				
				onClickHandler() {
					this.props.dispatch(clickHandler)
				}
	render() {
		console.log('Children Compoent render()');
		return (<div>
		<h1> Children Compoent: {this.state.book} </h1>
				<button type='text' name='sumbit' onClick={this.onClickHandler}>Click</button>
				{/* <button type='submit' name='count' onClick={this.increateCount}>Submit </button> */}
			</div>);
	}
}