import '../customCSS/deadlock.css'
import deadlockOne from '../../images/deadlockOne.png';
import deadlockTwo from '../../images/deadlockTwo.png' 
import GitIcon from '../customIcon/github';
import { Link } from 'react-router-dom';

export default function DeadlockProject({ theme }) {
    return (
        <div className={`d-flex flex${theme} flex-column align-items-center mainFlex `}>
            <div className="d-flex flex-column topClass mt-5">
                <p style={{ fontFamily: 'lexendMed' }}>Deadlock Chatbox</p>
            </div>
            <div className="d-flex flex-column align-items-between topClass mt-3 w-50 h-100">
                <p style={{ fontFamily: 'lexendMed', fontSize: '22px', wordWrap: 'break-word' }}>Description: <span style={{ fontFamily: 'lexendLig', fontSize: '20px' }}>
                    A python based end-to-end encrypted messenger. It generates its own unique RSA asymmetric encryption key, for every session, to encrypt texts and files.
                </span>
                </p>
                <p className='mt-4' style={{ fontFamily: 'lexendMed', fontSize: '22px', wordWrap: 'break-word' }}>Images: </p>
                <div className='d-flex mt-4 justify-content-center align-items-center h-50'>
                    <div id="carouselExampleIndicators" class="carousel slide w-100" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={deadlockOne} class="d-block w-100" alt="deadlock pic 1" />
                            </div>
                            <div class="carousel-item">
                                <img src={deadlockTwo} class="d-block w-100" alt="deadlock pic 2" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-column align-self-center mt-3">
                    <Link to={'https://github.com/arush-shri/deadlock-messenger'} target='_blank'>
                        <GitIcon/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}