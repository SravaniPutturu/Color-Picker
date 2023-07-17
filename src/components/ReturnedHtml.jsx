import React, { useState, useEffect } from 'react';
import { colorShades } from './ColorShades';
import { Element } from 'react-scroll';

const ReturnedHtml = ({ inputValue }) => {
  const [copy, setCopy] = useState(false);
  const [filteredColorArr, setFilteredColorArr] = useState([]);

  
  useEffect(() => {
    const filteredArr = colorShades.filter(color =>
      color.name.toLowerCase().includes(inputValue.slice(1, -1).toLowerCase())
    );
    setFilteredColorArr(filteredArr);
  }, [inputValue]);

  function handleCopy(shadeColor) {
    setCopy(shadeColor);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }


  return (
    <div className="container">
      {filteredColorArr.map((color, index) => (
        
        <Element key={index} name={color.name}>
          <h2 style={{ margin: '7rem 0 2rem 0' }}>
            <p>Wanna try {color.name}</p>
          </h2>

          <div className="colorContainer">
            {color.shades.map((shadeColor, index) => (
              <span
                onClick={() => handleCopy(shadeColor)}
                key={index}
                className="colorEle"
                style={{ background: `${shadeColor}` }}
              >
                <p
                  style={{
                    position: 'relative',
                    top: '88%',
                    left: '8%',
                    background: 'black',
                    color: 'white',
                    borderRadius: '0 0 85% 85%',
                    width: '85%',
                  }}
                >
                  {shadeColor}
                </p>
                {copy === shadeColor && (
                  <p
                    style={{
                      background: 'white',
                      color: 'black',
                      borderRadius: '5px',
                      width: '80%',
                      position: 'relative',
                      left: '10%',
                    }}
                  >
                    Copied
                  </p>
                )}
              </span>
            ))}
          </div>
        </Element>
      ))}
    </div>
  );
};

export default ReturnedHtml;


