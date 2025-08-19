import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import { useState } from 'react';
import './App.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home');

    const navigate = (screen) => {
        setCurrentScreen(screen);
    };

    const screens = {
        home: (
            <div className="screen">
                <h1>Welcome</h1>
                <p>Your amazing app</p>
                <button onClick={() => navigate('features')}>Features</button>
                <button onClick={() => navigate('profile')}>Profile</button>
            </div>
        ),
        features: (
            <div className="screen">
                <h1>Features</h1>
                <div>✨ Feature 1</div>
                <div>🚀 Feature 2</div>
                <button onClick={() => navigate('home')}>Back</button>
            </div>
        ),
        profile: (
            <div className="screen">
                <h1>Profile</h1>
                <div>👤 John Doe</div>
                <button onClick={() => navigate('home')}>Back</button>
            </div>
        ),
    };

    return (
        <div className="app-wrapper">
            <DeviceFrameset device="iPhone X" color="black" landscape={false}>
                <div className="app-content">
                    {screens[currentScreen]}
                </div>
            </DeviceFrameset>
        </div>
    );
}

export default App;
