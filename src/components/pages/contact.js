import '../customCSS/contact.css'
import GitIcon from '../customIcon/github';
import { Link } from 'react-router-dom';
import LinkdinIcon from '../customIcon/linkdin';
import LeetCodeIcon from '../customIcon/leetcode';
import InstaIcon from '../customIcon/instagram';
import { useState } from 'react';

export default function Contact({theme}){
    const butMode = theme === 'dark'? 'info':'dark'
    const mailText = `Dear Arush,

I hope this message finds you well. I recently had the opportunity to visit your portfolio, and I must say, I was truly impressed by your qualifications and skills.
At [Company Name], we are always on the lookout for outstanding individuals who can bring fresh perspectives and contribute to our dynamic team. I believe your background aligns perfectly with what we're looking for.
We currently have an exciting job opportunity for the position of [Position Name], and we are interested in discussing this role with you. Your skills and experience make you an ideal candidate, and we would like to invite you to consider joining our team.
I would be delighted to provide you with more details about the role and our company. Please let me know your availability for a conversation or an interview, whether it's over a call or in person. Feel free to suggest a date and time that works best for you.
Thank you for considering this opportunity, and I look forward to speaking with you soon.
    
Best regards,
    
Your Full Name
Your Title
Company Name
Your Contact Information`
    const [mailIn, mailChange] = useState(mailText)
    const handleChange = (event)=>{
        mailChange(event.target.value)
    }
    return(
        <div className={`d-flex flex${theme} flex-column align-items-center mainFlex`} style={{ fontFamily: 'lexendLig'}}>
            <div className="d-flex flex-column topClass h-100 mt-5">
                <p style={{ fontFamily: 'lexendMed'}}>Contact Me</p>
                <div className='d-flex flex-column align-self-center w-50 h-100'>
                    <p>Email</p>
                    <textarea className='form-control mt-3' onInput={handleChange} value={mailIn} />
                    <Link to={`mailto:shri.arush03@gmail.com?subject${encodeURIComponent("Job Offer for [Position Title]")}&body=${encodeURIComponent(mailIn)}`} type="button" class={`btn btn-outline-${butMode} mt-4 Mailbut align-self-center`}>Send Mail</Link>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center w-75 h-50">
                <div>
                    <p style={{ fontFamily: 'lexendMed'}} className='mt-4'>OR</p>
                </div>
                <div className='row'>
                    <Link to="https://github.com/arush-shri" target='_blank' className='col'>
                        <GitIcon/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/arush-shri/" target='_blank' className='col'>
                        <LinkdinIcon/>
                    </Link>
                    <Link to="https://leetcode.com/arush_shri/" target='_blank' className='col'>
                        <LeetCodeIcon/>
                    </Link>
                    <Link to="https://www.instagram.com/shri.arush/" target='_blank' className='col'>
                        <InstaIcon/>
                    </Link>
                </div>
            </div>
        </div>
    )
}