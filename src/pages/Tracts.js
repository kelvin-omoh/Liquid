import './tracts.css'
import tractImg from '../Images/east-st-elmo-opportunity-zone.jpg'
import tractImg2 from '../Images/old-montopolis-opportunity-zone-fund.png'
import tractImg3 from '../Images/east-oltorf-opportunity-zone-fund.png'
import tractImg4 from '../Images/parker-lane-opportunity-zone-fund.png'
import InvestorProspectus from '../components/investorProspectus'

export default function Tracts() {
    return (
        <div className="tracts-page">
            <h1 className='tracts-head'>TRACTS</h1>

            <div className='funds-opportunity-zone'>
                {/* <h1>Opportunity Zone Investments Funds</h1> */}

                <div className='funds-opportunity-item one'>
                    <img className='imgs' src={tractImg}/>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for BLUEGATE INVESTMENT to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                </div>

                <div className='funds-opportunity-item two'>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for BLUEGATE INVESTMENT to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                    <img className='imgs' src={tractImg2}/>
                </div>

                <div className='funds-opportunity-item three'>
                    <img className='imgs' src={tractImg3}/>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for BLUEGATE INVESTMENT to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                </div>

                <div className='funds-opportunity-item four'>
                    <div className='tracts-text'>
                        <h1>TRACT 24.13</h1>
                        <h2>EAST ST ELMO</h2>
                        <p>
                            East St Elmo represents a massive opportunity for BLUEGATE INVESTMENT to invest in sites designed for both
                            our startup communities and for rental income. Campus #1 is currently being planned for launch in this census tract.
                        </p>

                        <p className='tracts-last-p'>AUSTIN | TRAVIS COUNTY | TEXAS | 78744</p>

                    </div>
                    <img className='imgs' src={tractImg4}/>
                </div>

            </div>
             
        </div>

    )
}