import React, { useState, useEffect } from 'react';


function useFetch (url) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading (true);
        fetch(url)
            .then(res => res.json())
            .then (data => setData(data))
                .finally(() => setLoading(false))
}, []);

    return {data, loading};
}


export {useFetch};