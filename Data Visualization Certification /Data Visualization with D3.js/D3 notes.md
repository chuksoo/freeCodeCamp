<h1>Data Visualization with D3.js</h1>

D3, or D3.js, stands for Data Driven Documents. It's a JavaScript library for creating dynamic and interactive data visualizations in the browser.

D3 is built to work with common web standards – namely HTML, CSS, and Scalable Vector Graphics (SVG).

D3 supports many different kinds of input data formats. Then, using its powerful built-in methods, you can transform
those data into different charts, graphs, and maps. In the Data Visualization with D3 courses, you'll learn how to work with data to create
different charts, graphs, hover elements, and other ingredients to create dynamic and attractive data visualizations.

<h2>Add Document Elements with D3</h2>
D3 has several methods that let you add and change elements in your document. The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:

`const anchor = d3.select("a");`
The above example finds the first anchor tag on the page and saves an HTML node for it in the variable `anchor`.

Two other useful methods are append() and text().

The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

Here's an example that selects an unordered list, appends a list item, and adds text:

```
d3.select("ul")
  .append("li")
  .text("Very important item");

```

D3 allows you to chain several methods together with periods to perform a number of actions in a row.
