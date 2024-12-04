import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DataFetcher from './components/DataFetcher';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Welcome to React App</h1>
                <DataFetcher />
            </main>
            <Footer />
        </div>
    );
}

export default App;