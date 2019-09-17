# Design Explanation
Tej Patel

Based on the given requirements, I have made my table to the following specifications:
1. The table must support custom components, styling, and behavior
2. The table must support cell editing \*
3. Cells should support validation

\* _While row editing was not explicitly demonstrated here, it would be possible to do, assuming any custom components specified how they should be editable_

The table is composed of three types of components: Cells, Columns, and a Table. In the sections below, I will explain how I designed each component to meet these criteria. As a general note, this table was designed to be as lightweight as possible. I attempted to maximize extendability while minimizing the number of decisions the components would have to make for the developers that might use it.

## Cell
The Cell component is the most basic component of the table. It effecively serves as a wrapper
for components to be displayed within it. Users can pass in two categories of children into a 
Cell. The first is a *plain input* which is specified by simply passing a string into the Cell.
This abstracts away the simple use case of creating a cell with a simple text field so that a 
basic table can very quickly and easily be constructed. The second use case is for *all other 
types of components*. The table supports any type of JSX component that developers may want to include within it. These components can be passed in as the children of a Cell. In both cases, custom styling can be applied to the child component of a Cell so that it can be made to look any way the developer desires. The ExampleTable component shows how the basic components (Cell, Column, Table) can be used to build custom behavior for the table (implementing an 'Add Row' button)

If text is passed into the Cell, it will render an input field with that text as the default value. As this is a common case, edit functionality has already been implemeneted, although even this could be reassigned by the consuming developer if needed. By default, any input cell is editable simply by clicking on it. Changes made to its value are stored in an internal state variable, which could be passed to other parts of an application for additonal processing if needed. For custom components, since the Cell simply acts as a container for the component, developers could define their how they want editing to work in their components, and the Cells would not get in the way, thus making it very easy to work with.

By default, the Cell does not apply validation to the basic input field nor custom components. However, as the value of the input is stored in the Cell's state variable, custom formatting could be applied to it as needed for a particular use case. Additionally, since the Cell acts as a container for all other component types, a Redux-Form or Formik field component could be passed into the Cell to allow for simple cell validation, without any of the table components getting in the way. 

## Column
The Column component is comprised of a header and a list of Cells. The number of Cells in a Column is user-defined, and for maximum extendability, the Column does not require that all of its child Cells display the same type of component. However, the ExampleTable component shows how this could be easily done if needed. The Column supports custom styling for the entire container as well as the header. Additionally, while the column header will usually be text, it could be any type of component if necessary.

As mentioned before, because the Column does not require all of its Cells to be of the same component type, Cells within a Column could have different types of validation.

## Table
The Table component is comprised of 1 or more Columns. As it is simply a container for the Columns, it can take in custom styling, and delegates the rest of the functionality to its children.

### ExampleTable
This component is an example of how these components could be used to make a traditional table. It displays a table comprised of simple input boxes, checkboxes, and radioboxes, which shows that Cells can take in any type of component. Additionally, it illustrates how all of the Cells in a Column could be made to be of the same component type, if needed, for a particular use case. Additionally, it implents an 'Add Row' button, showing that the components support custom behavior as well. Finally, the ExampleTable component takes in multiple styles that are applied to each component, again showing the components' flexibility.