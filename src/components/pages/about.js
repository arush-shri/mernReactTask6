import '../customCSS/about.css'
import { useState, useEffect } from 'react'
export default function About({theme}){
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setTimeout(() => setMounted(!mounted), 100);
        console.log()
      }, []);
    return (
        <div className="d-flex w-100 abMain justify-content-center" style={{ fontFamily: 'lexendMed'}}>
            <div className={`d-flex row topFlex top${theme} mt-4`}>
                <div className={`d-flex flex-column col abouText ${mounted ? 'about-slide-enter-active' : 'about-slide-enter'}`}>
                    <p className='abouTitle'>About me</p>
                    <p style={{ fontFamily: 'lexendLig', wordWrap: 'break-word' }}>
                        A motivated student working towards building a career as software developer. I am committed towards developing career path and enhance knowledge in corporate world. A fast learner, resourceful individual and skilled multitasker. Willing to take on any task towards success of the organisation. Reliable and dedicated team player with hardworking and resourceful approach.
                    </p>
                </div>
                <div className={`d-flex w-50 col abouText align-items-end justify-content-center ${mounted ? 'about-slide-two-enter-active' : 'about-slide-two-enter'}`}>
                    <div style={{ fontFamily: 'lexendLig' }}>
                        <p className='abouTitle' style={{ fontFamily: 'lexendMed' }}>Skills</p>
                        <ul>
                            <li>Kotlin</li>
                            <li>Dart</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>Ruby</li>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Mobile App Development</li>
                            <li>Full Stack Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}