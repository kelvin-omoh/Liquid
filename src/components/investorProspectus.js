import './investorProspectus.css'
import investorIMG from '../Images/Crypto bg.png'

export default function InvestorProspectus() {
    return (
        <div className='investor-prospectus'>
            <img src={investorIMG}></img>
            {/* <div className='investor-txt'> */}
            <div className='investor-prospectus-text'>
                <div>
                    <h1>INVESTOR PROSPECTUS</h1>
                    <input placeholder='your@email.co'></input>
                    <button>Download</button>
                </div>
            </div>
        </div>
    )
}