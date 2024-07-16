import React, { useState, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Characters.css';

function Characters({ state }) {
    // Doraemon Popover State
    const [showDoraemon, setShowDoraemon] = useState(false);
    const [targetDoraemon, setTargetDoraemon] = useState(null);
    const refDoraemon = useRef(null);

    // Nobita Popover State
    const [showNobita, setShowNobita] = useState(false);
    const [targetNobita, setTargetNobita] = useState(null);
    const refNobita = useRef(null);

    // Shizuka Popover State
    const [showShizuka, setShowShizuka] = useState(false);
    const [targetShizuka, setTargetShizuka] = useState(null);
    const refShizuka = useRef(null);

    // Giaan Popover State
    const [showGiaan, setShowGiaan] = useState(false);
    const [targetGiaan, setTargetGiaan] = useState(null);
    const refGiaan = useRef(null);

    // Suneo Popover State
    const [showSuneo, setShowSuneo] = useState(false);
    const [targetSuneo, setTargetSuneo] = useState(null);
    const refSuneo = useRef(null);

    const handleClick = (event, setShow, setTarget) => {
        setShow(prev => !prev);
        setTarget(event.target);
    };

    return (
        <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3 tabs"
            fill
        >
            <Tab eventKey="home" title="Doraemon" className='tab1'>
                <div className='tab-content'>
                    <div className='tab-image-container'>
                        <img src='https://variety.com/wp-content/uploads/2014/05/doraemon2.jpg?crop=0px%2C193px%2C1593px%2C887px&resize=1000%2C563' alt='' />
                    </div>
                    <div className='tab-text-container'>
                        <h1>{state}</h1>
                        <p>Doraemon is a male robotic earless cat that travels back in time from the 22nd century to aid a preteen boy named Nobita</p>
                        <div ref={refDoraemon}>
                            <Button onClick={(event) => handleClick(event, setShowDoraemon, setTargetDoraemon)}>More Info</Button>
                            <Overlay
                                show={showDoraemon}
                                target={targetDoraemon}
                                placement="bottom"
                                container={refDoraemon.current}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3">Doraemon Info</Popover.Header>
                                    <Popover.Body>
                                        <p><b>Birthday:</b> September 3, 2112</p>
                                        <p><b>Species:</b> Robot, Cat</p>
                                        <p><b>TV Shows:</b> Doraemon, Gadget Cat from the Future</p>
                                        <p><b>Created by:</b> Fujiko F. Fujio</p>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Nobita" className='tab2'>
                <div className='tab-content'>
                    <div className='tab-image-container'>
                        <img src='https://wallpapers.com/images/hd/cute-nobita-drinking-juice-6axtj3eswasap3b6.jpg' alt='' />
                    </div>
                    <div className='tab-text-container'>
                        <h1>Nobita</h1>
                        <p>Hello there, I'm Nobita!</p>
                        <div ref={refNobita}>
                            <Button onClick={(event) => handleClick(event, setShowNobita, setTargetNobita)}>More Info</Button>
                            <Overlay
                                show={showNobita}
                                target={targetNobita}
                                placement="bottom"
                                container={refNobita.current}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3">Nobita Info</Popover.Header>
                                    <Popover.Body>
                                        <p><b>Birthday:</b> August 7, 1961 (1969)</p>
                                        <p><b>Children:</b> Nobisuke</p>
                                        <p><b>Age:</b> 10</p>
                                        <p><b>Spouse:</b> Shizuka Minamoto </p>
                                        <p><b>Created by:</b> Fujiko F. Fujio</p>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="longer-tab" title="Shizuka" className='tab3'>
                <div className='tab-content'>
                    <div className='tab-image-container'>
                        <img src='https://i.pinimg.com/736x/a8/12/aa/a812aad6eaa53a7a0ab4c71ca1d3b0b7.jpg' alt='' />
                    </div>
                    <div className='tab-text-container'>
                        <h1>Shizuka</h1>
                        <p>Hello there, I'm Shizuka!</p>
                        <div ref={refShizuka}>
                            <Button onClick={(event) => handleClick(event, setShowShizuka, setTargetShizuka)}>More Info</Button>
                            <Overlay
                                show={showShizuka}
                                target={targetShizuka}
                                placement="bottom"
                                container={refShizuka.current}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3">Shizuka Info</Popover.Header>
                                    <Popover.Body>
                                        <p><b>Birthday:</b> May 8</p>
                                        <p><b>Spouse:</b> Nobita Nobi</p>
                                        <p><b>Created by:</b> Fujiko F. Fujio</p>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="contact" title="Giaan" className='tab4'>
                <div className='tab-content'>
                    <div className='tab-image-container'>
                        <img src='https://i.pinimg.com/736x/42/87/8f/42878f266cbdc553a966b606829a70ac.jpg' alt='' />
                    </div>
                    <div className='tab-text-container'>
                        <h1>Giaan</h1>
                        <p>Hello there, I'm Giaan!</p>
                        <div ref={refGiaan}>
                            <Button onClick={(event) => handleClick(event, setShowGiaan, setTargetGiaan)}>More Info</Button>
                            <Overlay
                                show={showGiaan}
                                target={targetGiaan}
                                placement="bottom"
                                container={refGiaan.current}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3">Giaan Info</Popover.Header>
                                    <Popover.Body>
                                        <p><b>Birthday:</b> June 15</p>
                                        <p><b>Spouse:</b> Unknown</p>
                                        <p><b>Created by:</b> Fujiko F. Fujio</p>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="Suneo" title="Suneo" className='tab5'>
                <div className='tab-content'>
                    <div className='tab-image-container'>
                        <img src='https://i.pinimg.com/736x/55/10/e7/5510e757378f0128dd0e6e575158ca16.jpg' alt='' />
                    </div>
                    <div className='tab-text-container'>
                        <h1>Suneo</h1>
                        <p>Hello there, I'm Suneo!</p>
                        <div ref={refSuneo}>
                            <Button onClick={(event) => handleClick(event, setShowSuneo, setTargetSuneo)}>More Info</Button>
                            <Overlay
                                show={showSuneo}
                                target={targetSuneo}
                                placement="bottom"
                                container={refSuneo.current}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained">
                                    <Popover.Header as="h3">Suneo Info</Popover.Header>
                                    <Popover.Body>
                                        <p><b>Birthday:</b> February 29</p>
                                        <p><b>Spouse:</b> Unknown</p>
                                        <p><b>Created by:</b> Fujiko F. Fujio</p>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
}

export default Characters;
