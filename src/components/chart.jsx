
import React, {useState,useEffect} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import  Navbar  from "./Navbar";

const BarChart = () => {
    const [endpoint, setEndpoint] = useState('')
    const [container, setContainer] = useState([])

    useEffect(() => {
      fetchData()
    },[])
    const fetchData = () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4bd952d73bmsh8bf9cd7faf39a60p12ebe2jsne830ef41f37f',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };

      fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
        .then(response => response.json())
        .then(data => setContainer(data))
        .catch(err => console.error(err));

    }


  let result = []

  const dataValue = Object.values(container.d)
  const finalValue = dataValue.map((e) => result.push(e.y))

  const data = {
    labels: result,

    datasets: [
      {
        label: container.q,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        // data: dataValue,
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Navbar/>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;