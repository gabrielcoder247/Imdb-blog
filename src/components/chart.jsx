import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Navbar from "./Navbar";

const BarChart = () => {
    const [endpoint, setEndpoint] = useState('')
    const [container, setContainer] = useState([])
    const [storeChart, setStoreChart] = useState('');



    useEffect(() => {
        fetchData()
        return window.localStorage.setItem("storeChart", result)

    }, [])

    useEffect(() => {
        const clientId = () => {
            return localStorage.getItem("storeChart")
        }

        if (storeChart) {
            setStoreChart(storeChart);
        }
    }, []);
    const fetchData = async() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4bd952d73bmsh8bf9cd7faf39a60p12ebe2jsne830',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };

        const fetchResult = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
            .then(response => response.json())
            .then(data => setContainer(data))
            .catch(err => console.error(err));

        // console.log(fetchResult)

    }

    // console.log(container.d)
    // let result = []
        // // const labelValue = Object.keys(container.d)
        // const dataValue = Object.values(container.d)
        // const finalValue = dataValue.map((e) => result.push(e.y))
        // const finalResult = result.sort((a,b)=> a-b)
        // console.log(finalResult)
        const newArr = container.d
        console.log(newArr)
        const result  = newArr.map((e) => e.y)




    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
        labels: labels,
        // labels:result,

        datasets: [{
            label: container.q,
            // label: 'Hello',
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            // data: dataValue,
            data: [0, 10, 5, 2, 20, 30, 45],
        }, ],
    };
    return ( <div>
        <Navbar />
        <Bar data = { data }/>
        </div>
    );
};

export default BarChart;