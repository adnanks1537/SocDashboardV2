import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import LoadingSpinner from './components/LoadingSpinner';
import ProgressBar from './components/ProgressBar';
import PieChart from './components/PieChart';
import ThreatMap from './components/ThreatMap';
import './App.css';
import { dummyData } from './data/dummyData';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
            setData(dummyData);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Cyberpunk SOC SIEM Dashboard</h1>
            </header>
            <aside className="dashboard-sidebar">
                <nav>
                    <ul>
                        <li>Overview</li>
                        <li>Alerts</li>
                        <li>Reports</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </aside>
            <main className="dashboard-main">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        <div className="cards-container">
                            {data.map((item, index) => (
                                <Card key={index} title={item.title}>
                                    <p>{item.content}</p>
                                    <ProgressBar progress={item.progress} />
                                </Card>
                            ))}
                        </div>
                        <div className="charts-container">
                            <h2>Threat Analysis</h2>
                            {data.map((item, index) => (
                                <PieChart key={index} title={item.title} />
                            ))}
                        </div>
                        <div className="threat-map">
                            <h2>Real-Time Threat Map</h2>
                            <ThreatMap />
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default App;
