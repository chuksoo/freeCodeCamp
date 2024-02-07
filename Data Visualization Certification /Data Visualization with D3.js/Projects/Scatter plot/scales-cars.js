// // Preliminaries
// console.log(cars.map((d) => d.mpg));
// console.log(Math.min(1, 5, 3, 2, -8, 2));

// // Extract displacement
// const displacements = cars.map((car) => car.disp);
// // Get minimum and maximum displacement values
// const minDisplacement = Math.min(...displacements);
// console.log("Minimum Displacement:", minDisplacement);

// const maxDisplacement = Math.max(...displacements);
// console.log("Maximum Displacement:", maxDisplacement);

// // Use d3.extent() to get the minimum and maximum displacements
// const [minDispValue, maxDispValue] = d3.extent(cars, (d) => d.disp);
// console.log("Minimum displacement:", minDispValue);
// console.log("Maximum displacement:", maxDispValue);

// Basic Scatter Plot
// Define the dimensions and margins for the graph
var margin = { top: 40, right: 20, bottom: 40, left: 40 },
  padding = { top: 20, right: 20, bottom: 20, left: 20 },
  outerWidth = 600,
  outerHeight = 400,
  innerWidth = outerWidth - margin.left - margin.right,
  innerHeight = outerHeight - margin.top - margin.bottom,
  width = innerWidth - padding.left - padding.right,
  height = innerHeight - padding.top - padding.bottom;

const svg = d3
  .select("body")
  .append("svg")
  // set the id, dimensions and position of the svg element
  .attr("id", "cars-scatter")
  .attr("width", outerWidth)
  .attr("height", outerHeight);

// Create linear scales x & y for X and Y axis and set their ranges - positional scales
const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(cars, (car) => car.disp)])
  .range([0, width]);
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(cars, (car) => car.mpg) + 5])
  .range([height, 0]);

// Create scales for the size of dots (wt), color of dots (cyl) and shape of dot (cyl) - categorical scales
var symbol = d3.symbol();

const sizeScale = d3
  .scaleLinear()
  .domain(d3.extent(cars, (car) => car.wt))
  .range([2, 10]); // Adjust range for size of dots -

const colorScale = d3
  .scaleOrdinal()
  .domain(d3.extent(cars, (car) => car.cyl))
  .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"]); // Adjust colors for number of cylinders

// Create container for plot elements
const container = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .attr("id", "container");

var dots = container.selectAll(".dots").data(cars).enter().append("path");

dots
  .attr(
    "d",
    symbol.type(function (car) {
      if (car.cyl === 4) {
        return d3.symbolDiamond;
      } else if (car.cyl === 6) {
        return d3.symbolTriangle;
      } else {
        return d3.symbolCircle;
      }
    })
  )
  .attr("fill", (car) => colorScale(car.cyl)) // Set fill to transparent
  .attr("stroke", "steelblue") // Set outline color
  .attr("stroke-width", 1) // Set stroke width
  .attr("r", (car) => sizeScale(car.wt)) // Adjust size of the circles
  .attr("transform", function (car) {
    return "translate(" + xScale(car.disp) + "," + yScale(car.mpg) + ")";
  });

// Create two axis function
const x_axis = d3.axisBottom(xScale).ticks(10);
const y_axis = d3.axisLeft(yScale).ticks(10);

// Create grid function
const x_axis_grid = d3
  .axisBottom(xScale)
  .tickSize(-height)
  .tickFormat("")
  .ticks(10);
const y_axis_grid = d3
  .axisLeft(yScale)
  .tickSize(-width)
  .tickFormat("")
  .ticks(10);

// Create grid line
container
  .append("g")
  .attr("class", "x axis_grid")
  .attr("transform", "translate(0, " + height + ")")
  .call(x_axis_grid);

container.append("g").attr("class", "y axis_grid").call(y_axis_grid);

// Create axes
var x_axis_line = container
  .append("g")
  .attr("id", "x_axis")
  .attr("transform", "translate(" + 0 + "," + height + ")")
  .call(x_axis);

var y_axis_line = container.append("g").attr("id", "y_axis").call(y_axis);

// Add text labels for X and Y axis
var x_axis_label = container
  .append("text")
  .attr("id", "x_axis_label")
  .attr("x", width / 2 - 40)
  .attr("y", height + margin.bottom)
  .text("displacement (cu. in.)");

var y_axis_label = container
  .append("text")
  .attr("id", "y_axis_label")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2 - 50)
  .attr("y", -28)
  .text("fuel efficiency (mpg)");

var title = container
  .append("text")
  .attr("id", "title")
  .attr("transform", "translate(" + 0 + "," + -padding.top + ")")
  .text(
    "Scatter plot of the gas mileage (mpg) vs the displacement (disp) of some cars"
  );
