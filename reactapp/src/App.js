import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DataFetcher from './components/DataFetcher';
import { XRay } from 'aws-xray-sdk-core'; // Import AWS X-Ray SDK

function App() {

    // Optionally, capture a custom segment for actions within the app
    useEffect(() => {
        XRay.captureAsyncFunc('AppLoadSegment', (subsegment) => {
            // You can add logic to simulate load or track any async operation
            console.log('App segment started.');

            // Simulate an async operation (e.g., data fetching, API calls)
            setTimeout(() => {
                subsegment.close();
                console.log('App segment closed after async task.');
            }, 2000);
        });
    }, []);

    // Example of tracking a button click event
    const handleButtonClick = () => {
        XRay.captureAsyncFunc('ButtonClick', (subsegment) => {
            subsegment.addMetadata('button', 'clicked');
            console.log('Button clicked and segment started.');
            // Simulate some action
            setTimeout(() => {
                subsegment.close();
                console.log('Button click segment closed.');
            }, 1000);  // Simulate a 1-second delay for the action
        });
    };

    return (
        <div className="App">
            <Header />
            <main>
                <h1>Welcome to React App</h1>
                <button onClick={handleButtonClick}>Click Me</button>
                <DataFetcher />
            </main>
            <Footer />
        </div>
    );
}

export default App;
