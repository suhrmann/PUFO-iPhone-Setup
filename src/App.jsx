import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import { useState } from 'react';
import './App.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState('hallo');

    const navigate = (screen) => {
        setCurrentScreen(screen);
    };

    const screens = {
        hallo: (
            <div className="screen">
                <h1 className={'hallo'}>Hallo,</h1>
                <p>ich bin dein iPhone</p>
                <button onClick={() => navigate('ops')}>Hallo, iPhone</button>
            </div>
        ),
        ops: (
            <div className="screen">
                <h1>Options, Preferences, Settings</h1>
                <p>
                  Vielen Dank, dass du dich für ein iPhone entschieden hast.
                </p>
                <p>
                  Bevor wir anfangen, gemeinsam Spaß zu haben, müssen wir noch ein paar <strong>Options</strong>, <strong>Preferences</strong>, <strong>Settings</strong> durchmachen.
                </p>
                <button onClick={() => navigate('uhr1')}>
                    <p>
                        Alles klar. <br/>
                        Deutsch als Sprache generell würde ich gerne wählen. <br/>
                    </p>
                    <p>
                        Kann ich das schon wählen?
                    </p>
                </button>
            </div>
        ),
        uhr1: (
            <div className="screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    Möchtest du deine Uhrzeit <br/>
                    auf dem Kopf lesen?
                </div>
                <button onClick={() => navigate('uhr2')}>
                    Wie? Also in dem Sinne von... <br/>
                    man holt es mal aus dem... <br/>
                    Nee, eigentlich...
                </button>
                <button onClick={() => navigate('uhr2')}>
                    Nee, ich weiß nicht warum. <br/>
                    Nein, nein.
                </button>
            </div>
        ),
        uhr2: (
            <div className="screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    Okay. Möchtest du deine Uhrzeit spiegeln?
                </div>
                <button onClick={() => navigate('uhr3')}>
                    <p>
                        Nein. Nein. <br/>
                    </p>
                    <p>
                        Ich sehe es selten im Spiegel, meine Uhrzeit.
                    </p>
                    <p>
                        Genau.
                        Einfach nein.
                    </p>
                </button>
            </div>
        ),
        uhr3: (
            <div className="screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    Möchtest du, dass deine Uhrzeit in Binär angezeigt wird?
                </div>
                <button onClick={() => navigate('uhr4')}>
                    <p>Viele Uhrzeitfragen.</p>
                    <p>Immerhin bin ich froh, dass du schon auf Deutsch mit mir sprichst.</p>
                </button>
                <button onClick={() => navigate('uhr4')}>
                    <p>Nee, ich würde nicht so gerne auf Binär sehen.</p>
                    <p>Ich weiß nicht genau...</p>
                </button>
            </div>
        ),
        uhr4: (
            <div className="screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    <p>Möchtest du, dass deine Uhrzeit in Buchstaben angezeigt wird?</p>
                    <p>Also dass da in Worten steht, welche Uhrzeit ist?</p>
                </div>
                <button onClick={() => navigate('uhr5')}>
                    Danke für die Erklärung. <br/>
                    Nee, auch nicht so gern. <br/>
                    Danke schön.
                </button>
                <button onClick={() => navigate('uhr5')}>
                    Einfach die normale Uhrzeit. <br/>
                    Also ganz normal, genau gleich, nicht irgendwie gekippt. <br/>
                    Uhrzeit!
                </button>
            </div>
        ),
        uhr5: (
            <div className="screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    Möchtest du, dass deine Uhrzeit, wie mit einer Sonnenuhr durch so einen Schattenstreifen angezeigt wird?
                </div>
                <button onClick={() => navigate('uhr6')}>
                    <p>Nein, nicht so gern.</p>
                </button>
                <button onClick={() => navigate('uhr6')}>
                    <p>Nein, das macht auch gar keinen Sinn. Es ist viel komplizierter zu lesen.</p>
                </button>
                <button onClick={() => navigate('uhr6')}>
                    <p>Ganz normale Uhr, bitte. Danke.</p>
                </button>
            </div>
        ),
        uhr6: (
            <div className="screen-centered">
                <h1 className="hallo line-1_5">
                    Manche <br />
                    mögen <br />
                    das
                </h1>

                <div className="siri-wrapper">
                    <div className="siri-circle">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
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
