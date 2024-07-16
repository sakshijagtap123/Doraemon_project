import React from 'react';
import './GadgetGallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GadgetGallery = () => {
  const items = [
    { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KImU4unaL-KHp32Cgwcn07D4pzE6ZwHjiA&s', description: 'Take Copter: A small headgear that allows the user to fly.'},
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4H-Jc4VLbOinT1pyAjFmlO23AUT1wrUFjw&s', description: 'Anywhere Door: A door that opens to any location the user wants.' },
    { id: 3, url: 'https://m.media-amazon.com/images/I/71MofGcqUiL._AC_UF1000,1000_QL80_.jpg', description: 'Time Machine: A machine that allows time travel.'},
    { id: 4, url: 'https://pm1.aminoapps.com/6648/05f980785fb02696d3c381478bd1ad57222d8e6a_00.jpg', description: 'Small Light: A flashlight that can shrink objects.'},
    { id: 5, url: 'https://i.pinimg.com/originals/5d/df/ef/5ddfef6a7da4ff14ff7025206128b0d9.jpg', description: 'Big Light: A flashlight that can enlarge objects.'},
    { id: 6, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTah-L4QzoAcqGvBZQ-BEyrcEezADFYnnKCfA&s', description: 'Bamboo Copter: Another name for the Take Copter.' },
    { id: 7, url: 'https://amodern.net/wp-content/uploads/2018/02/Translation-Jelly.png', description: 'Translator Tool: A gadget that translates any language.', timeDate: '2024-07-15' },
    { id: 8, url: 'https://assets.mycast.io/actor_images/actor-air-cannon-354329_large.jpg?1643464997', description: 'Air Cannon: A cannon that shoots powerful blasts of air.' },
    { id: 9, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8R1t4hqJJ9ZTrhSMBaDV5TP3nLgl_BQ8TQ&s', description: 'Gulliver Tunnel: A tunnel that changes the size of the person passing through.' }
  ];

  return (
    <div className="container" id='gadget'>
      {items.map(item => (
        <div className="bg-items" key={item.id}>
          <div className="items" style={{ backgroundImage: `url(${item.url})` }}>
            <div className="overlay"></div>
            <div className="details">
              <h3>#{item.id}</h3>
              <p>{item.description}</p>
              <h6>{item.timeDate}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GadgetGallery;
