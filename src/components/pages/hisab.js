import '../customCSS/deadlock.css'
import React from 'react';
import hisabVid from '../../images/hisabVid.mp4';
import GitIcon from '../customIcon/github';
import { Link } from 'react-router-dom';

export default function HisabProject({ theme }) {
    return (
        <div className={`d-flex flex${theme} flex-column align-items-center mainFlex `}>
            <div className="d-flex flex-column topClass mt-5">
                <p style={{ fontFamily: 'lexendMed' }}>Hisab Book</p>
            </div>
            <div className="d-flex flex-column align-items-between secondClass mt-3 h-100">
                <p style={{ fontFamily: 'lexendMed', fontSize: '22px', wordWrap: 'break-word' }}>Description: <span style={{ fontFamily: 'lexendLig', fontSize: '20px' }}>
                Android application crafted with kotlin and seamlessly integrated with AWS! to simplify debt tracking and transaction history, perfect for managing shared expenses among friends, family, or colleagues.
                </span>
                </p>
                <p className='mt-4' style={{ fontFamily: 'lexendMed', fontSize: '22px', wordWrap: 'break-word' }}>Demo Video: </p>
                <video width="640" height="360" controls autoPlay className='align-self-center'>
                    <source src={hisabVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="d-flex flex-column align-self-center mt-3">
                    <Link to={'https://github.com/arush-shri/hisab_book'} target='_blank'>
                        <GitIcon/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}