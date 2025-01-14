import React from 'react';

const CircularElementWithSVG = ({ number, svgSrc,height }) => {
  return (
    <div style={{
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '25px solid rgba(1, 106, 112, 1) ',
    //   background: ;

      backgroundColor: 'transparent', // This makes the circle hollow
      color:'rgb(0, 253, 117)',
      padding: '10px'
    }}>
      <img src={svgSrc} alt="Plastic Bottles" style={{ height: {height}, marginBottom: '10px',filter: 'invert(100%)' }} />
      <span>{number}</span>
    </div>
  );
};

export default CircularElementWithSVG;