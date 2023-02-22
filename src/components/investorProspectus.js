import './investorProspectus.css'
import investorIMG from '../Images/investor-prospectus-liquid-investment-funds-jpg.webp'

export default function InvestorProspectus() {
    return (
        <div className='investor-prospectus'>
            <img className=' object-cover' src={investorIMG}></img>
            {/* <div className='investor-txt'> */}
            <div className='investor-prospectus-text'>
                <div>
                    <h1 className='text-center md:text-left'>INVESTOR PROSPECTUS</h1>
                    <input className=' text-[1em]' placeholder='your@email.com'></input>
                    <button className=''>Download</button>
                </div>
            </div>
        </div>
    )
}