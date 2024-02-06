let countries = [
  {
    Country: "Bangladesh",
    Code: "BAN",
    LandArea: 130170,
    Population: 160,
    Energy: 27944,
    Rural: 72.9,
    Military: 10.8,
    Health: 7.4,
    HIV: 0.1,
    Internet: 0.3,
    Developed: 1,
    BirthRate: 21.4,
    ElderlyPop: 3.8,
    LifeExpectancy: 66.1,
    CO2: 0.3198,
    GDP: 674.9316,
    Cell: 46.1692,
    Electricity: 251.6287,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "Brazil",
    Code: "BRA",
    LandArea: 8459420,
    Population: 191.972,
    Energy: 248528,
    Rural: 14.4,
    Military: 5.9,
    Health: 6,
    Internet: 37.5,
    Developed: 1,
    BirthRate: 16.2,
    ElderlyPop: 6.6,
    LifeExpectancy: 72.4,
    CO2: 2.0529,
    GDP: 10710.066,
    Cell: 104.1024,
    Electricity: 2206.1965,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "China",
    Code: "CHN",
    LandArea: 9327480,
    Population: 1324.655,
    Energy: 2116427,
    Rural: 56.9,
    Military: 16.1,
    Health: 10.3,
    Internet: 22.5,
    Developed: 1,
    BirthRate: 12.1,
    ElderlyPop: 7.9,
    LifeExpectancy: 73.1,
    CO2: 5.3085,
    GDP: 4428.4646,
    Cell: 64.1862,
    Electricity: 2631.4028,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "India",
    Code: "IND",
    LandArea: 2973190,
    Population: 1139.965,
    Energy: 620973,
    Rural: 70.5,
    Military: 14.7,
    Health: 4.4,
    HIV: 0.3,
    Internet: 4.5,
    Developed: 1,
    BirthRate: 22.8,
    ElderlyPop: 4.8,
    LifeExpectancy: 63.7,
    CO2: 1.5287,
    GDP: 1474.9808,
    Cell: 64.2382,
    Electricity: 596.8221,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "Indonesia",
    Code: "INA",
    LandArea: 1811570,
    Population: 227.345,
    Energy: 198679,
    Rural: 48.5,
    Military: 5.3,
    Health: 6.2,
    HIV: 0.2,
    Internet: 7.9,
    Developed: 1,
    BirthRate: 18.6,
    ElderlyPop: 5.9,
    LifeExpectancy: 70.8,
    CO2: 1.7281,
    GDP: 2945.5767,
    Cell: 91.716,
    Electricity: 590.1535,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "Japan",
    Code: "JPN",
    LandArea: 364500,
    Population: 127.704,
    Energy: 495838,
    Rural: 33.5,
    Health: 17.9,
    HIV: 0.1,
    Internet: 75.2,
    Developed: 3,
    BirthRate: 8.7,
    ElderlyPop: 21.4,
    LifeExpectancy: 82.6,
    CO2: 9.4606,
    GDP: 42831.0475,
    Cell: 94.7103,
    Electricity: 7819.1829,
    kwhPerCap: "Over 5000",
  },
  {
    Country: "Mexico",
    Code: "MEX",
    LandArea: 1943950,
    Population: 106.35,
    Energy: 180605,
    Rural: 22.8,
    Health: 15,
    HIV: 0.3,
    Internet: 21.9,
    Developed: 1,
    BirthRate: 18.3,
    ElderlyPop: 6.2,
    LifeExpectancy: 75.1,
    CO2: 4.3012,
    GDP: 9123.4059,
    Cell: 80.5504,
    Electricity: 1942.8408,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "Nigeria",
    Code: "NGR",
    LandArea: 910770,
    Population: 151.212,
    Energy: 111156,
    Rural: 51.6,
    Military: 10.8,
    Health: 6.4,
    HIV: 3.6,
    Internet: 15.9,
    Developed: 1,
    BirthRate: 39.8,
    ElderlyPop: 3.1,
    LifeExpectancy: 47.9,
    CO2: 0.6356,
    GDP: 1222.4773,
    Cell: 55.1042,
    Electricity: 120.5077,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "Pakistan",
    Code: "PAK",
    LandArea: 770880,
    Population: 166.111,
    Energy: 82839,
    Rural: 63.8,
    Military: 18,
    Health: 3.1,
    HIV: 0.1,
    Internet: 11.1,
    Developed: 1,
    BirthRate: 30.1,
    ElderlyPop: 4,
    LifeExpectancy: 66.5,
    CO2: 0.9745,
    GDP: 1018.8728,
    Cell: 59.2058,
    Electricity: 449.3228,
    kwhPerCap: "Under 2500",
  },
  {
    Country: "Russian Federation",
    Code: "RUS",
    LandArea: 16376870,
    Population: 141.95,
    Energy: 686757,
    Rural: 27.2,
    Military: 16.3,
    Health: 9.2,
    HIV: 1,
    Internet: 32,
    Developed: 3,
    BirthRate: 12.1,
    ElderlyPop: 13.3,
    LifeExpectancy: 67.8,
    CO2: 12.037,
    GDP: 10439.6424,
    Cell: 167.682,
    Electricity: 6135.5728,
    kwhPerCap: "Over 5000",
  },
  {
    Country: "United States",
    Code: "USA",
    LandArea: 9147420,
    Population: 304.375,
    Energy: 2283722,
    Rural: 18.3,
    Military: 18.6,
    Health: 18.7,
    HIV: 0.6,
    Internet: 75.8,
    Developed: 3,
    BirthRate: 14.3,
    ElderlyPop: 12.6,
    LifeExpectancy: 78.4,
    CO2: 17.9417,
    GDP: 47198.5045,
    Cell: 90.2441,
    Electricity: 12903.8067,
    kwhPerCap: "Over 5000",
  },
];

// Define the dimensions and margins for the graph
var margin = { top: 20, right: 20, bottom: 40, left: 40 },
  padding = { top: 20, right: 20, bottom: 20, left: 20 },
  outerWidth = 400,
  outerHeight = 250,
  innerWidth = outerWidth - margin.left - margin.right,
  innerHeight = outerHeight - margin.top - margin.bottom,
  width = innerWidth - padding.left - padding.right,
  height = innerHeight - padding.top - padding.bottom;

// Create scales x & y for X and Y axis and set their ranges
var x = d3.scaleLinear().range([0, innerWidth]); // Added padding.right in order to match solution
var y = d3.scaleBand().range([0, innerHeight]).padding(0.1);

var svg = d3
  .select("body")
  .append("svg")
  // set the id, dimensions and position of the svg element
  .attr("id", "svg1")
  .attr("width", outerWidth)
  .attr("height", outerHeight);
  
// Sort the countries array by population in descending order
countries.sort((a, b) => b.Population - a.Population); 

// Set domain of X and Y scales
x.domain([0, d3.max(countries, (d) => d.Population)]);
y.domain(countries.map((d) => d.Country));

// Create two axis function
var x_axis = d3.axisTop(x);
var y_axis = d3.axisLeft(y);

// Create container for plot elements
var container = svg
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  .attr("id", "container");

// Add bars to svg - create new elements based on your data
var bars = container.append("g").attr("transform", "translate(" + padding.left + "," + padding.top + ")").attr("id", "bars");

// Create bars and assign it to a variable 'bars'
bars
  .selectAll("rect") // select all the rectangles in this SVG - new selection starts here (and is empty for now)
  .data(countries) // Bind the data in countries to these (non-existent rectangles)
  .enter()
  .append("rect") // selection now has 11 rects, each associated with 1 row of data
  .transition()
  .duration(1000)
  .attr("x", 0)
  .attr("y", (d) => y(d.Country))
  .attr("height", y.bandwidth())
  .attr("width", (d) => x(d.Population))
  .style("fill", "red");

// Add X-axis
var x_axis_line = container
  .append("g")
  .attr("id", "x-axis")
  .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
  .call(x_axis);

// Create Y-axis
var y_axis_line = container
  .append("g")
  .attr("id", "y-axis")
  .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
  .call(y_axis);

 // Rotate y-axis tick labels
 y_axis_line.selectAll("text")
.attr("transform", "rotate(-25)")
.style("text-anchor", "end")
.attr("dx", "-0.05em")
.attr("dy", "0.05em"); 

// Add text label for X axis
var x_axis_label = container
  .append("text")
  .attr("id", "x_axis_label")
  .attr("transform", "translate(" + width / 2 + "," + 0 + ")")
  .text("Population");
