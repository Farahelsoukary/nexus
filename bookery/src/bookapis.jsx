import React, { useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
                headers: {
                    'X-RapidAPI-Key': 'a6da476813mshfe327e52bae5fa8p1b6d89jsndb2903fae5df',
                    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
                },
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
};

export default YourComponent;