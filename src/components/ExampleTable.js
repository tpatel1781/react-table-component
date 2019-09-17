import React from 'react';
import Table from './Table';
import Column from './Column'
import Cell from './Cell'

/**
 * This component is an example of how the Table, Column, and Cell components
 * can be used to make a table with custom components, styling, etc. In practice,
 * developers on other teams could make a similar type of component to add functionality
 * specific to their use case
 * 
 * For this example, every Column has the same number of Cells, and the Cells in each
 * Column have the same component. However, this is not a requirement; the individual
 * components do not impose these restrictions.
 */
export default class ExampleTable extends React.Component {
	// State variables are initialized as prop values, and updated later
	state = {
		numRows: this.props.numRows,
		columnNames: this.props.columnNames,
		columnComponents: this.props.columnComponents,
	}

	/**
	 * Function called when 'Add Row' button is clicked
	 * Increments the numRows state variable, which causes the table to re-render
	 * with the added row. None of the existing cells are affected by the re-render
	 */
	addRow() {
		this.setState(() => {
			return { numRows: this.state.numRows + 1 };
		});
	}

	/**
	 * Constructs the columns with the given number of cells and component type
	 */
	buildColumns() {
		let columns = []; // List of columns that contains the JSX elements

		// Loop over all of the column names, making a column for each
		for (var i=0; i<this.state.columnNames.length; i++) {
			// Construct the cells for this column
			let cells = [];
			for (var j=0; j<this.state.numRows; j++) {
				cells.push(
					<Cell 
						cellStyle={this.props.cellStyle} inputStyle={this.props.inputStyle} 
						componentContainerStyle={this.props.componentContainerStyle} key={j}>
						{this.state.columnComponents[i]}
					</Cell>
				);
			}

			// Construct the column and add the cells within it
			columns.push(
				<Column header={this.state.columnNames[i]} 
						headerStyle={this.props.headerStyle} 
						columnStyle={this.props.columnStyle}
						key={i}>
					{cells}
				</Column>
			);
		}
		return columns;
	}

	render() {
		return (
			<div>
				<input type="submit" value="Add Row" 
						onClick={() => this.addRow()} style={buttonStyle}/>
				<Table tableStyle={this.props.tableStyle}>
					{this.buildColumns()}
				</Table>
			</div>
		);
	}
}

// Styling for the 'Add Row' button, specific to this example component
const buttonStyle = {
	background: '#428EF7',
	paddingTop: 10,
	paddingBottom: 10,
	paddingLeft: 14,
	paddingRight: 14,
	color: '#ffffff',
	fontSize: 14,
	borderRadius: 8,
	fontWeight: 'bolder',
	marginTop: 20,
	marginLeft: 20,
	outline: 'none'
}