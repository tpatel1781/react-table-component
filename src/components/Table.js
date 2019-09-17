import React from 'react';

/**
 * This table component encapsulates the Columns and their cells
 */
export default class Table extends React.Component {
	render() {
		return (
			<div style={this.props.tableStyle}>
				{this.props.children}
			</div>
		  );
	}
}