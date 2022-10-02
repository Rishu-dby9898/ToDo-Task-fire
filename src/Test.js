import axios from 'axios';
import React, { useState } from 'react';

const Test = () => {

    // const [moo, setMoo] = useState("");

    const [xData, setXData] = useState({});

    // `http://dummy.restapiexample.com/api/v1/employees`
    // `https://jsonplaceholder.typicode.com/users`



    const train = () => {
        const options = {
            method: 'GET',
            url: 'https://indianrailways.p.rapidapi.com/findstations.php',
            params: { station: 'patna' },
            headers: {
                'X-RapidAPI-Key': 'c416b4c94cmshb821979b6bfdafdp1127d9jsn80ea71a0f614',
                'X-RapidAPI-Host': 'indianrailways.p.rapidapi.com'
            }
        };



        axios.request(options).then(function (response) {
            console.log(response.data);
            setXData(response.data);
        }).catch(function (error) {
            console.error(error);
        });


    }

    return (<>
        <button onClick={train}>ok</button>
     
    </>)



}
export default Test;