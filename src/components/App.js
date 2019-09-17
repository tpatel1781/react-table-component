import React from 'react';
import ExampleTable from './ExampleTable.js'

function App() {
	// Specifying the Column headers
	let columnNames = ['First', 'Second', 'Third', 'Fourth'];
	// Defining the type of component to be displayed in the Cells of each Column
	let columnComponents = [
		'Hello World', // Will be displayed as a textbox with this default value
		'1234', // Also displayed as a textbox with this value
		<label style={labelStyle}>
			<input type='radio' style={{marginRight: 10}}/>
			Radio
		</label>,
		<label style={labelStyle}>
			<input type='checkbox' style={{marginRight: 10}}/>
			CheckBox
		</label>,
	];

	return (
    	<div className="App">
			<ExampleTable 
				numRows={5} // Each column will have 5 cells
				columnNames={columnNames} 
				columnComponents={columnComponents}
				cellStyle={cellStyle}
				headerStyle={headerStyle}
				columnStyle={columnStyle}
				tableStyle={tableStyle}
				inputStyle={inputStyle}
				componentContainerStyle={componentStyle} />
    	</div>
  	);
}

// Example styles to pass into the ExampleTable for each type of child component
const cellStyle = {
	border: '1px solid #F7F7F7',
	height: 42
}
const tableStyle = {
	display: 'flex',
	marginTop: 20,
	marginLeft: 20
}
const columnStyle = {
	border: '1px solid #F7F7F7',
}
const headerStyle = {
	fontWeight: 'bold',
	fontSize: 20,
	padding: 10,
}
const inputStyle = {
	border: 'none',
	fontSize: 18,
	padding: 10 
}
const componentStyle = {
	padding: 10,
}
const labelStyle = {
	fontSize: 18
}

export default App;