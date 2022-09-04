
import React, {useState} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    const [endpoint, setEndpoint] = useState('')
    const [container, setContainer] = useState([])

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'db48eef57amsh51c80937b24e4fap1fb830jsnd925f2b78caf',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };

      fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

  // const yrData = data.datasets.map((currentYear) => currentYear.y)

  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: container.q,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;