import React, { useEffect, useState } from 'react';

const YourComponent = () => {
    const [data, setData] = useState([]);
    const [queryParam, setQueryParam] = useState('');

    useEffect(() => {
        // 发起请求
        fetchData();
    }, [queryParam]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5002/api/data?queryParam=${queryParam}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={queryParam}
                onChange={(e) => setQueryParam(e.target.value)}
                placeholder="Enter search parameter"
            />
            <button onClick={fetchData}>Search</button>

            <ul>
                {data.map((item) => (
                    <li key={item.order_sn}>{item.user_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default YourComponent;
