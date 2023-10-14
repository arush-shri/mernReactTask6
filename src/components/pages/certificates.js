import androidCertImage from '../../images/androidCer.jpg';
import bitsCertImage from '../../images/bitsCer.png';
import sqlCertImage from '../../images/SQlCer.jpg';
import bugCertImage from '../../images/bugZCer.jpg';
import endCertImage from '../../images/endPointCer.jpg';
import pythonCertImage from '../../images/pythonCer.jpg';
import rorCertImage from '../../images/RORCer.jpg';
import '../customCSS/carousel.css'

export default function Certificate({mode}){
    return (
        <div style={{ fontFamily: 'lexendReg'}}>
            <div className='d-flex justify-content-center mt-3'>
                <div className={`d-flex flex-col align-items-end w-75 ms-3 p${mode}`}>
                    <p>My Certificates</p>
                </div>
            </div>
            <div className='d-flex caraFlex justify-content-center align-items-center mt-4'>
                <div id="carouselExampleIndicators" class="carousel slide w-50" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={androidCertImage} class="d-block w-100" alt="Android dev Certificate" />
                    </div>
                    <div class="carousel-item">
                        <img src={rorCertImage} class="d-block w-100" alt="ROR Dev Certificate" />
                    </div>
                    <div class="carousel-item">
                        <img src={bitsCertImage} class="d-block w-100" alt="Bits and bytes of CN Certificate" />
                    </div>
                    <div class="carousel-item">
                        <img src={sqlCertImage} class="d-block w-100" alt="SQL Certificate" />
                    </div>
                    <div class="carousel-item">
                        <img src={pythonCertImage} class="d-block w-100" alt="Python Certificate" />
                    </div>
                    <div class="carousel-item">
                        <img src={endCertImage} class="d-block w-100" alt="End Point Protection Certificate" />
                    </div>
                    <div class="carousel-item">
                        <img src={bugCertImage} class="d-block w-100" alt="Bug Bounty Certificate" />
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
        </div>
    )
}