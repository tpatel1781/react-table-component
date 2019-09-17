import React from 'react';

/**
 * The Column component is a container for a list of Cells. Each Column also takes in
 * a header component that can be set and styled separately from the Cells. All of the
 * Cells within a Column are not required to contain the same type of component
 */
export default class Column extends React.Component {
	render() {
		return (
			<div style={this.props.columnStyle}>
				<div style={this.props.headerStyle}>
					{this.props.header}
				</div>
				{this.props.children}
			</div>
		  );
	}
}