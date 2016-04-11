// plot histogram
    var raw = [
    {
      "Date": "18/9/15",
      "Volume": 487388400
    },
    {
      "Date": "17/9/15",
      "Volume": 286434400
    },
    {
      "Date": "16/9/15",
      "Volume": 309553700
    },
    {
      "Date": "15/9/15",
      "Volume": 434647900
    },
    {
      "Date": "14/9/15",
      "Volume": 223378900
    },
    {
      "Date": "10/9/15",
      "Volume": 194180600
    },
    {
      "Date": "9/9/15",
      "Volume": 278849300
    },
    {
      "Date": "8/9/15",
      "Volume": 254863800
    },
    {
      "Date": "7/9/15",
      "Volume": 188827500
    },
    {
      "Date": "4/9/15",
      "Volume": 248801500
    },
    {
      "Date": "3/9/15",
      "Volume": 130165600
    },
    {
      "Date": "2/9/15",
      "Volume": 252188900
    },
    {
      "Date": "1/9/15",
      "Volume": 270394000
    },
    {
      "Date": "31/8/15",
      "Volume": 335994700
    },
    {
      "Date": "28/8/15",
      "Volume": 338757700
    },
    {
      "Date": "27/8/15",
      "Volume": 439281700
    },
    {
      "Date": "26/8/15",
      "Volume": 373092100
    },
    {
      "Date": "25/8/15",
      "Volume": 594979100
    },
    {
      "Date": "24/8/15",
      "Volume": 424998800
    },
    {
      "Date": "21/8/15",
      "Volume": 348683700
    },
    {
      "Date": "20/8/15",
      "Volume": 280388500
    },
    {
      "Date": "19/8/15",
      "Volume": 364260000
    }
  ];

    var x = [];

    for (var i = 0; i < raw.length; i ++) {
    	x[i] = raw[i]["Volume"];
    };

    var data = [
      {
        x: x,
        type: 'histogram'
      }
    ];

    var layout = {
      title: "Histogram of Trading Volume on STI Component Tickers",
      xaxis: {
        title: "Days grouped by trading volume"
      },
      yaxis: {
        title: "Number of days in trading range"
      },
      bargap: 0.1
    };

    Plotly.newPlot('myDiv', data, layout);
