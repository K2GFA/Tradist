var data = [{
  name: "AAPL",
  text: ["Apple"],
  marker: {
    sizemode: "area",
    sizeref: 0.1,
    size : [609.85]
  },
  mode: "markers",
  y: [42702133],
  x: [3.46]
},{
  name: "BP",
  text: ["British Petroleum"],
  marker: {
    sizemode: "area",
    sizeref: 0.1,
    size: [99.10]
  },
  mode: "markers",
  y: [11972500],
  x: [4.44],
  uid: "9d3ba4"
},
{
  name: "SBUX",
  text: ["Starbucks"],
  marker: {
    sizemode: "area",
    sizeref: 0.1,
    size: [90.19]
  },
  mode: "markers",
  y: [12922300],
  x: [4.26],
  uid: "f9fb74"
}];

var layout = {
  xaxis: {
    title: 'Average Monthly Price Change (%)'
  },
  yaxis: {
    title: 'Volume'
  },
  margin: {
    t: 20
  },
  hovermode: 'closest'
};

Plotly.plot('tester', data, layout);
