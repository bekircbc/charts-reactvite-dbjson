import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import "./App.scss";
import db from "./data/db.json";

export const App = () => {
  const [chart, setChart] = useState({});
  const [type, setType] = useState("radar");

  useEffect(() => {
    // if (
    //   type === "bar" ||
    //   type === "line" ||
    //   type === "radar" ||
    //   type === "area" ||
    //   type === "heatmap"
    // ) {
    setChart(db.apexcharts.filter((m) => m.type === type));
    // } else if (
    //   type === "donut" ||
    //   type === "histogram" ||
    //   type === "pie" ||
    //   type === "radialBar" ||
    //   type === "scatter" ||
    //   type === "bubble" ||
    //   type === "candleStick" ||
    //   type === "polarArea"
    // ) {
    //   setOptions(pieOptions), setSeries(pieSeries);
    // }
  }, [type]);

  return (
    <div className="App">
      <h1>Apex Chart with Navbar</h1>
      <nav className="navbar">
        <button onClick={() => setType("donut")}>Donut</button>
        <button onClick={() => setType("area")}>Area</button>
        <button onClick={() => setType("histogram")}>Histogram</button>
        <button onClick={() => setType("pie")}>Pie</button>
        <button onClick={() => setType("radialBar")}>Radial Bar</button>
        <button onClick={() => setType("bar")}>Bar</button>
        <button onClick={() => setType("scatter")}>Scatter</button>
        <button onClick={() => setType("radar")}>Radar</button>
        <button onClick={() => setType("bubble")}>Bubble</button>
        <button onClick={() => setType("heatmap")}>Heatmap</button>
        <button onClick={() => setType("candleStick")}>Candle Stick</button>
        <button onClick={() => setType("polarArea")}>Polar Area</button>
        <button onClick={() => setType("line")}>Line</button>
      </nav>

      <Chart chart={chart} />
    </div>
  );
};
