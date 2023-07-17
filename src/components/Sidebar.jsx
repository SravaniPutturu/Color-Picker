

import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  const btnColors = [
    {
      color: 'red',
      name: 'Red'
    },
    {
      color: 'blue',
      name: 'Blue'
    },
    {
      color: 'green',
      name: 'Green'
    },
    {
      color: 'yellow',
      name: 'Yellow'
    },
    {
      color: 'purple',
      name: 'Purple'
    },
    {
      color: 'orange',
      name: 'Orange'
    }
  ];

  const [active, setActive] = useState(null);

  const handleButtonMouseEnter = (color) => {
    setActive(color);
  };

  const handleButtonMouseLeave = () => {
    setActive(null);
  };

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', position: 'fixed', right: '0', top: '30%', gap: '.2rem' }}>
      {btnColors.map((item) => (
        <Link key={item.name} name={item.name}  activeClass="active" 
        to={item.name}
        spy={true} 
        smooth={true}
        offset={-70}
        duration={500}>
          <button
            onMouseEnter={() => handleButtonMouseEnter(item.color)}
            onMouseLeave={handleButtonMouseLeave}
           
            style={{
              width: '50px',
              height: '50px',
              border: active === item.color ? '2px solid white' : 'none',
              borderRadius: '25% 0 0 25%',
              background: item.color
            }}
          ></button>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
