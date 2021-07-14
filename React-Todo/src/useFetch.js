import { useState, useEffect } from 'react';

const useFetch = (callback, url) => {
    const [loading, setLoading] = useState(false);
    console.log("에헤")
    useEffect(() => {
        // const response = await fetch(url);
        // const initialData = await response.json();
        setLoading(true);
        const initialData = [
            {
                id: 1,
                title: "자바하기",
                status: "todo"
            },
            {
                id: 2,
                title: "파이썬하기",
                status: "todo"
            },
            {
                id: 3,
                title: "React하기",
                status: "todo"
            },
            {
                id: 4,
                title: "Vue하기",
                status: "todo"
            }
        ]
        callback(initialData);
        setLoading(false);

    }, [])

    return loading;
}

export default useFetch