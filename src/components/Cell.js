import React from 'react';

/**
 * The Cell component is the building block of the table and acts as a container
 * for the component.
 */
export default class Cell extends React.Component {
	state = {
		inputVal: this.props.children // Value for the textbox, if given
	}

	/**
	 * If this cell contains an input, this function will be called when its text 
	 * is changed. Sets the new value to the state's inputVal variable so it is saved
	 */
	updateInput = (event) => {
		this.setState({
			inputVal: event.target.value
		})
	}

	render() {
		return (
			<div style={this.props.cellStyle}>
				{
					// Render a text input if a string was passed into the Cell
					// Otherwise, render the custom component within the Cell
					(typeof this.props.children === 'string') ?
					<input 
						type='text'
						value={this.state.inputVal} 
						onChange={this.updateInput}
						style={this.props.inputStyle} /> :
					<div style={this.props.componentContainerStyle}>
						{this.props.children}
					</div>
				}
			</div>
		);
	}
}