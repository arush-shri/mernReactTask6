import '../customCSS/deadlock.css'
import passOne from '../../images/passguardOne.jpg';
import passTwo from '../../images/passguardTwo.jpg' 
import passThree from '../../images/passguardThree.jpg' 
import GitIcon from '../customIcon/github';
import { Link } from 'react-router-dom';

export default function PassGuardProject({ theme }) {
    return (
        <div className={`d-flex flex${theme} flex-column align-items-center mainFlex `}>
            <div className="d-flex flex-column topClass mt-5">
                <p style={{ fontFamily: 'lexendMed' }}>Pass Guard</p>
            </div>
            <div className="d-flex flex-column align-items-between secondClass mt-3 h-100">
                <p style={{ fontFamily: 'lexendMed', fontSize: '22px', wordWrap: 'break-word' }}>Description: <span style={{ fontFamily: 'lexendLig', fontSize: '20px' }}>
                A python and SQL based program which generates a random password for you and stores it in a database if you want.Database file is encrypted everytime program exits and decrypts when data is accessed.                </span>
                </p>
                <p className='mt-4' style={{ fontFamily: 'lexendMed', fontSize: '22px', wordWrap: 'break-word' }}>Images: </p>
                <div className='d-flex mt-4 justify-content-center align-items-center h-50'>
                    <div id="carouselExampleIndicators" class="carousel slide w-100" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={passOne} class="d-block w-100" alt="pass guard pic 1" />
                            </div>
                            <div class="carousel-item">
                                <img src={passTwo} class="d-block w-100" alt="pass guard pic 2" />
                            </div>
                            <div class="carousel-item">
                                <img src={passThree} class="d-block w-100" alt="pass guard pic 3" />
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
                    <Link to={'https://github.com/arush-shri/pass-guard'} target='_blank'>
                        <GitIcon/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}