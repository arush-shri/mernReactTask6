import '../customCSS/homeBody.css'
import myPic from '../../images/myPic.png'
import React, { useEffect, useState } from 'react';

export default function Home({theme}){
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const lines = ['Hi! Myself', 'Arush Shrivastava'];
    function typeLine() {
        if (lineIndex < lines.length) {
          const line = lines[lineIndex];
          if (charIndex < line.length) {
            setCharIndex(charIndex + 1);
          } else {
            setLineIndex(lineIndex + 1);
            setCharIndex(0);
          }
        }
    }
    useEffect(() => {
      const timer = setTimeout(typeLine, 50);
      return () => clearTimeout(timer);
    }, [lineIndex, charIndex]);
    return(
        <div className={`d-flex flex-column mt-4 mainCol body${theme} align-items-center w-100`} style={{ fontFamily: 'lexendReg'}}>
            <div class="typing-text row">
            <div className='d-flex flex-column w-50 h-50 justify-content-center'>
                {lines.map((line, index) => (
                    <p key={index} style={{ visibility: index <= lineIndex ? 'visible' : 'hidden' }}>
                        {line.substring(0, index < lineIndex ? line.length : charIndex)}
                    </p>
                ))}
            </div>
                <div className='d-flex flex-column w-50'>
                    <img src={myPic} class="img-fluid" alt="Arush Pic"
                    style={{ height: '85vh', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    )
}