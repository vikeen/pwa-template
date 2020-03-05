import React, {useState, useEffect} from 'react';

const App = () => {
    const [text, setText] = useState("loading...");

    useEffect(() => {
        fetch(`/api/healthcheck`).then(() => {
            setText("OK");
        }).catch(() => {
            setText("FAIL");
        });
    }, []);

    return (
        <div>
            <h1>React App</h1>
            <h2>{text}</h2>
        </div>
    );
};

export default App;