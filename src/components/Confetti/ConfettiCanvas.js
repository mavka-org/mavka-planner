import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const ConfettiCanvas = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas style={{position: "fixed", pointerEvents: "none", zIndex: 2, width: windowDimensions.width, height: windowDimensions.height, left: 0, top: 0}}
        ref={props.setConfettiCanvasRef}
      />
  )
}

export default ConfettiCanvas
