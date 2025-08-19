import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import { useRef, useState } from 'react';

import './App.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState('hallo');
    const audioRef = useRef(null);

    const navigate = (screen) => {
        setCurrentScreen(screen);
    };

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const screens = {
        hallo: (
            <div className="pufo-screen">
                <h1 className={'hallo'}>Hallo,</h1>
                <p>ich bin dein iPhone</p>
                <button onClick={() => navigate('ops')}>Hallo, iPhone</button>
            </div>
        ),
        ops: (
            <div className="pufo-screen">
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
            <div className="pufo-screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    <p>
                        Möchtest du deine Uhrzeit <br/>
                        auf dem Kopf lesen?
                    </p>
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
            <div className="pufo-screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    <p>Okay. Möchtest du deine Uhrzeit spiegeln?</p>
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
            <div className="pufo-screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    <p>Möchtest du, dass deine Uhrzeit in Binär angezeigt wird?</p>
                </div>
                <button onClick={() => navigate('uhr4')}>
                    <p>Viele Uhrzeitfragen.</p>
                </button>
                <button onClick={() => navigate('uhr4')}>
                    <p>Immerhin bin ich froh, dass du schon auf Deutsch mit mir sprichst.</p>
                </button>
                <button onClick={() => navigate('uhr4')}>
                    <p>Nee, ich würde nicht so gerne auf Binär sehen.</p>
                    <p>Ich weiß nicht genau...</p>
                </button>
            </div>
        ),
        uhr4: (
            <div className="pufo-screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    <p>Möchtest du, dass deine Uhrzeit in Buchstaben angezeigt wird?</p>
                    <p>Also dass da in Worten steht, welche Uhrzeit ist?</p>
                </div>
                <button onClick={() => navigate('uhr5')}>
                    <p>
                        Danke für die Erklärung. <br/>
                        Nee, auch nicht so gern. <br/>
                        Dankeschön.
                    </p>
                </button>
                <button onClick={() => navigate('uhr5')}>
                    <p>
                        Einfach die normale Uhrzeit. <br/>
                        Also ganz normal, genau gleich, nicht irgendwie gekippt. <br/>
                        Uhrzeit!
                    </p>
                </button>
            </div>
        ),
        uhr5: (
            <div className="pufo-screen">
                <h1>Options, Preferences, Settings</h1>
                <h2>Uhr</h2>
                <div>
                    <p>Möchtest du, dass deine Uhrzeit, wie mit einer Sonnenuhr durch so einen Schattenstreifen angezeigt wird?</p>
                </div>
                <button onClick={() => { navigate('uhr6'); playSound(); } }>
                    <p>Nein, nicht so gern.</p>
                </button>
                <button onClick={() => { navigate('uhr6'); playSound(); } }>
                    <p>Nein, das macht auch gar keinen Sinn. Es ist viel komplizierter zu lesen.</p>
                </button>
                <button onClick={() => { navigate('uhr6'); playSound(); } }>
                    <p>Ganz normale Uhr, bitte. Danke.</p>
                </button>
            </div>
        ),
        uhr6: (
            <div className="screen-centered">
                <h1 className="hallo line-1_5">
                    <span className="line">Manche</span><br/>
                    <span className="line">mögen</span><br/>
                    <span className="line">das</span>
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
                    <audio ref={audioRef} src="/UFO476_Nano_manche_moegen_das.mp3" preload="auto" />
                </div>
            </DeviceFrameset>
            <div style={{ fontSize: 'x-small' }}>
                <br/>
                Webentwicklung: SUhrmann - Sound: Florentin Will, <a href="https://www.daspodcastufo.com">DAS PODCAST UFO</a>, Episode <i>UFO476 Nano</i> - (c) iPhone Apple Inc.
            </div>
        </div>
    );
}

export default App;
