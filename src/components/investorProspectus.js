import './investorProspectus.css'
import investorIMG from '../Images/investor-prospectus-liquid-investment-funds-jpg.webp'
import pdf from "../GLOBAL-FINANCE-PROSPECTUS.pdf"
import { saveAs } from 'file-saver';
export default function InvestorProspectus() {
    const download=(e)=>{
          e.preventDefault()
          const fileUrl = process.env.PUBLIC_URL + pdf;
          const fileName = 'GLOBAL-FINANCE-PROOSPECTUS';
          saveAs(fileUrl, fileName);
    }
    return (
        <div className='investor-prospectus'>
            <img className=' object-cover' src={investorIMG}></img>
            {/* <div className='investor-txt'> */}
            <div className='investor-prospectus-text'>
                <div>
                    <h1 className='text-center md:text-left'>INVESTOR PROSPECTUS</h1>
                    <form action="" onSubmit={download}>
                        <input className=' text-[1em]' required placeholder='your@email.com'></input>
                    <button className=''>Download</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}