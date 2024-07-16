import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp2474188.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='left'>
                    <h3>Join Nobita and Doraemon on theirexciting adventures</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpapers.com/images/featured/doraemon-6ag1ry72uy2s9jmg.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Experience the joy of friendship with Doraemon</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpapers.com/images/hd/doraemon-and-nobita-in-blue-iflbbzrvl5c4ia5o.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Laugh along with Doraemon and friends!</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
